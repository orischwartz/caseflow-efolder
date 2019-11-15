class RenameExternalDocumentIdToVersionIdInRecords < ActiveRecord::Migration[5.1]
  def change
    rename_column :records, :external_document_id, :version_id
  end
end
