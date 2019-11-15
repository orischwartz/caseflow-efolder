class AddIndexManifestSourceIdExternalDocumentIdToRecords < ActiveRecord::Migration[5.1]
  safety_assured

  disable_ddl_transaction!

  def change
    add_index :records, [:manifest_source_id, :external_document_id], algorithm: :concurrently, using: :btree
  end
end
