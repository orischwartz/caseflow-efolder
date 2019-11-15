class RenameManifestIdToManifestSourceIdInRecords < ActiveRecord::Migration[5.1]
  def change
    rename_column :records, :manifest_id, :manifest_source_id
  end
end
