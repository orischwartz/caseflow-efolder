class AddTypeIdToDocuments < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :type_id, :string
  end
end
