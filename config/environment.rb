# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!
FeatureToggle.enable!(:efolder_react_app)
FeatureToggle.enable!(:can_access_v2)
FeatureToggle.enable!(:vva_service)