class RenameColumnsInRecords < ActiveRecord::Migration[5.1]
  def change
    rename_column :records, :vva_source, :source
    rename_column :records, :vva_jro, :jro
  end
end
