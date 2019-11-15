class RemoveDocumentsFilepathColumn < ActiveRecord::Migration[5.1]
  def change
    remove_column :documents, :filepath, :string
  end
end
