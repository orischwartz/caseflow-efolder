// This is a boilerplate script used by Jenkins to run the appeals-deployment
// pipeline. It clones the appeals-deployment repo and execute a file called
// common-pipeline.groovy.

pipeline {
    agent {
        docker { image 'williamyeh/ansible:centos7' }
    }
    
    stages { 
      stage('Deploy') {
        steps {
          script {

            // The application name as defined in appeals-deployment aws-config.yml
            def APP_NAME = 'efolder'

            // The application version to checkout.
            // See http://docs.ansible.com/ansible/git_module.html version field
            def APP_VERSION = env.APP_VERSION ?: 'HEAD'

            def DEPLOY_MESSAGE = null

            // Allows appeals-deployment branch (defaults to master) to be overridden for
            // testing purposes
            def DEPLOY_BRANCH = (env.DEPLOY_BRANCH != null) ? env.DEPLOY_BRANCH : 'master'

            def commonPipeline;

            node('deploy') {

              // withCredentials allows us to expose the secrets in Credential Binding
              // Plugin to get the credentials from Jenkins secrets.
              withCredentials([
                [
                  // Token to access the appeals deployment repo.
                  $class: 'StringBinding',
                  credentialsId : 'GIT_CREDENTIAL',
                  variable: 'GIT_CREDENTIAL',
                ]
              ])
              {
                // Clean up the workspace so that we always start from scratch.
                stage('cleanup') {
                  step([$class: 'WsCleanup'])
                }

                if (env.APP_ENV == 'prod') {
                  stage('deploy-message') {
                    checkout scm
                    DEPLOY_MESSAGE = sh (
                      // Save the most recent commit to a message to be announced in Slack by the commonPipeline.
                      script: "git log HEAD^..HEAD --pretty='format:%h %<(15)%an %s'",
                      returnStdout: true
                    ).trim()
                  }
                }

                // Checkout the deployment repo for the ansible script. This is needed
                // since the deployment scripts are separated from the source code.
                stage ('pull-deploy-repo') {

                  sh "git clone -b $DEPLOY_BRANCH https://${env.GIT_CREDENTIAL}@github.com/department-of-veterans-affairs/appeals-deployment"
                  dir ('./appeals-deployment/ansible') {
                    // The commmon pipeline script should kick off the deployment.
                    commonPipeline = load "../jenkins/common-pipeline.groovy"
                  }
                }
              }
            }

            // Execute the common pipeline.
            // Note that this must be outside of the node block since the common pipeline
            // runs another set of stages.
            commonPipeline.deploy(APP_NAME, APP_VERSION, DEPLOY_MESSAGE);
          }
        }
      }
    }
}
