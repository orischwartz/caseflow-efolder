class AddVeteranNameToDownloads < ActiveRecord::Migration[5.1]
  def change
    add_column :downloads, :veteran_name, :string
  end
end
