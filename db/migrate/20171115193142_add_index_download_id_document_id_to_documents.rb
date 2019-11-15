class AddIndexDownloadIdDocumentIdToDocuments < ActiveRecord::Migration[5.1]
  safety_assured

  disable_ddl_transaction!

  def change
    add_index :documents, [:download_id, :document_id], algorithm: :concurrently, using: :btree
    remove_index :documents, [:download_id]
  end
end
