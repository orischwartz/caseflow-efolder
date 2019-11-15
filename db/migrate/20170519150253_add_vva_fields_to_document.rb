class AddVvaFieldsToDocument < ActiveRecord::Migration[5.1]
  safety_assured

  def change
    add_column :documents, :downloaded_from, :string, default: "VBMS"
    add_column :documents, :jro, :string
    add_column :documents, :ssn, :string
  end
end
