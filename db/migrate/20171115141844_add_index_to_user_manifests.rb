class AddIndexToUserManifests < ActiveRecord::Migration[5.1]
  safety_assured

  def change
    add_index :user_manifests, [:manifest_id, :user_id], using: :btree
  end
end
