class AddFromApiToDownloads < ActiveRecord::Migration[5.1]
  safety_assured

  def change
    add_column :downloads, :from_api, :boolean, default: false
  end
end
