class AddFetchedFilesAtToUserManifests < ActiveRecord::Migration[5.1]
  def change
    add_column :user_manifests, :fetched_files_at, :datetime
  end
end
