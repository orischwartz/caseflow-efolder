class AddZipfileSizeToDownloads < ActiveRecord::Migration[5.1]
  def change
    add_column :downloads, :zipfile_size, :integer, limit: 8
  end
end
