class Api::V1::DocumentsController < Api::V1::ApplicationController
  before_action :can_access?

  def show
    # Enable document caching for a month.
    expires_in 30.days, public: true

    result = document.fetch_content!

    return document_failed if document.failed?
    send_data(
      result,
      type: document.mime_type,
      disposition: "attachment",
      filename: document.filename
    )
  end

  private

  def document
    @document ||= Document.find(params[:id])
  end

  def can_access?
    forbidden("sensitive record") if !document.can_be_access_by?(current_user)
  rescue ActiveRecord::RecordNotFound
    document_not_found
  end

  def document_not_found
    render json: {
      "errors": [
        "title": "Document not found",
        "detail": "A document with that ID was not found in our systems."
      ]
    }, status: 404
  end
end
