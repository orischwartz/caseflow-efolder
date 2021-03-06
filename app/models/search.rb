##
# Search represents any instance of a user searching for a
# veteran's eFolder, successfully or unsuccessfully. If successful,
# it performs logic required to initialize the subsequent download.
#
class Search < ApplicationRecord
  belongs_to :download
  belongs_to :user

  enum status: {
    download_created: 0,
    download_found: 1,
    veteran_not_found: 2,
    access_denied: 3
  }

  def valid_file_number?
    number = sanitized_file_number
    return true if number =~ /^DEMO/

    return false if /\D+/ =~ number
    # We don't want to render an error message on initial pageload.
    # We don't pass in user until we actually submit the form,
    # so only check length if the user attribute is present.
    return false if user && number.length < 8

    true
  end

  def perform!
    return true if match_existing_download

    download = download_scope.new

    return false unless validate!(download)

    transaction do
      download.save!
      update_attributes!(
        status: :download_created,
        download: download
      )
    end

    # We fetch the veteran info from BGS before starting the job so that we do any DB
    # updates adding that information before another process starts writing to the DB.
    download.fetch_veteran_info
    download.start_fetch_manifest
    true
  end

  def sanitized_file_number
    (file_number || "").strip
  end

  private

  def download_scope
    Download.active.where(
      file_number: sanitized_file_number,
      user: user,
      from_api: false
    ).where.not(status: [1, 7, 8, 9])
  end

  def match_existing_download
    return false unless (self.download = download_scope.first)

    update_attributes!(status: :download_found)
    true
  end

  def validate!(download)
    if download.demo?
      return true

    elsif !download.case_exists?
      update_attributes!(status: :veteran_not_found)
      return false

    elsif !download.can_access?
      update_attributes!(status: :access_denied)
      return false
    end

    true
  end
end
