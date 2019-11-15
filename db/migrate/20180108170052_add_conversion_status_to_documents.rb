class AddConversionStatusToDocuments < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :conversion_status, :integer
  end
end
