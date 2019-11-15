class AddUserIdIndexToFilesDownload < ActiveRecord::Migration[5.1]
  safety_assured

  disable_ddl_transaction!

  def change
    add_index :files_downloads, [:user_id], algorithm: :concurrently
  end
end
