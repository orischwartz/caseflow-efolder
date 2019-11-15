class AddFileNumberUserIndexToDownloads < ActiveRecord::Migration[5.1]
  safety_assured

  disable_ddl_transaction!

  def change
    add_index :downloads, [:file_number, :user_id], algorithm: :concurrently
  end
end
