class AddTypeDescriptionToDocuments < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :type_description, :string
  end
end
