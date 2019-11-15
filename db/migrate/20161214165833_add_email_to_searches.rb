class AddEmailToSearches < ActiveRecord::Migration[5.1]
  def change
    add_column :searches, :email, :string, limit: 191
  end
end
