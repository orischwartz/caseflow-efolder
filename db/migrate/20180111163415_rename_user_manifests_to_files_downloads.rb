class RenameUserManifestsToFilesDownloads < ActiveRecord::Migration[5.1]
  def change
    rename_table :user_manifests, :files_downloads
  end
end
