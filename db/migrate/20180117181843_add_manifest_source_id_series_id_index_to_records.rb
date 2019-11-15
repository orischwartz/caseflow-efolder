class AddManifestSourceIdSeriesIdIndexToRecords < ActiveRecord::Migration[5.1]
  safety_assured

  disable_ddl_transaction!

  def change
    add_index :records, [:manifest_source_id, :series_id], algorithm: :concurrently
  end
end
