class AddLockVersionToDownloads < ActiveRecord::Migration[5.1]
  def change
    add_column :downloads, :lock_version, :integer
  end
end
