class AddErrorMessageToDocuments < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :error_message, :text
  end
end
