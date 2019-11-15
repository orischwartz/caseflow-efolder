class AddManifestVvaFetchedAtToDownloads < ActiveRecord::Migration[5.1]
  def change
    add_column :downloads, :manifest_vva_fetched_at, :datetime
  end
end
