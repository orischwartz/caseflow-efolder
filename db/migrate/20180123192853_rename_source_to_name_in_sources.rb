class RenameSourceToNameInSources < ActiveRecord::Migration[5.1]
  def change
    rename_column :manifest_sources, :source, :name
  end
end
