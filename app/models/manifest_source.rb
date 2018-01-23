class ManifestSource < ActiveRecord::Base
  include ApplicationHelper

  enum status: {
    initialized: 0,
    pending: 1,
    success: 2,
    failed: 3
  }

  belongs_to :manifest
  has_many :records, dependent: :destroy

  validates :manifest, :name, presence: true
  validates :manifest, uniqueness: { scope: :name }
  validates :name, inclusion: { in: %w[VBMS VVA] }

  delegate :file_number, to: :manifest

  def start!
    return if current? || pending?
    update(status: :pending)
    V2::DownloadManifestJob.perform_later(self, ui_user?)
  end

  def service
    case name
    when "VBMS"
      VBMSService
    when "VVA"
      VVAService
    end
  end

  def current?
    success? && fetched_at && fetched_at > (ui_user? ? 72 : 3).hours.ago
  end
end
