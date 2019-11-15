class AddManifestVbmsFetchedAtToDownloads < ActiveRecord::Migration[5.1]
  def change
    add_column :downloads, :manifest_vbms_fetched_at, :datetime
  end
end
