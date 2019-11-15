class AddLockVersionToDocuments < ActiveRecord::Migration[5.1]
  def change
    add_column :documents, :lock_version, :integer
  end
end
