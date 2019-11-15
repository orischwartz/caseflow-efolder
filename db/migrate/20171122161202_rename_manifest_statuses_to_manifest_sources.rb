class RenameManifestStatusesToManifestSources < ActiveRecord::Migration[5.1]
  def change
    rename_table :manifest_statuses, :manifest_sources
  end
end
