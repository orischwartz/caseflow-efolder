class SessionsController < ApplicationController
  skip_before_action :check_out_of_service
  skip_before_action :verify_authenticity_token, only: [:create]
  skip_before_action :authenticate, only: [:create]
  skip_before_action :check_v2_app_access

  def create
    session["user"] = CssAuthenticationSession.from_css_auth_hash(css_auth_hash).as_json

    will_redirect_to = session.delete("return_to") || "/"

    Rails.logger.info("Authenticated session for #{session['user']} will redirect to #{will_redirect_to}")

    redirect_to will_redirect_to
  end

  def destroy
    session["user"] = nil
    redirect_to "/"
  end

  protected

  def css_auth_hash
    request.env["omniauth.auth"]
  end
end
