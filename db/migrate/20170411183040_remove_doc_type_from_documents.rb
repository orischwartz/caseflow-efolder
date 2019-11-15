class RemoveDocTypeFromDocuments < ActiveRecord::Migration[5.1]
  def change
    remove_column :documents, :doc_type
  end
end
