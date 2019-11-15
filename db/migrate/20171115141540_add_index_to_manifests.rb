class AddIndexToManifests < ActiveRecord::Migration[5.1]
  safety_assured

  def change
    add_index :manifests, [:file_number], using: :btree
  end
end
