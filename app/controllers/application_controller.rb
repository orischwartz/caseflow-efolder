class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  force_ssl if: :ssl_enabled?
  before_action :authenticate
  before_action :configure_bgs
  before_action :strict_transport_security

  def authenticate
    return true unless current_user.nil?

    session["return_to"] = request.original_url
    redirect_to((ENV["SSO_HOST"] || "") + "/auth/samlva")
  end

  def authorize_system_admin
    redirect_to "/unauthorized" unless current_user.can? "System Admin"
  end

  def authorize
    redirect_to "/unauthorized" unless current_user.can? "Download eFolder"
  end

  private

  def current_user
    @current_user ||= User.from_session(session, request)
  end
  helper_method :current_user

  def ssl_enabled?
    Rails.env.production? && !(request.path =~ /health-check/)
  end

  def strict_transport_security
    response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains" if request.ssl?
  end

  def configure_bgs
    BGSService.user = current_user
  end
end
