class AddConversionStatusToRecords < ActiveRecord::Migration[5.1]
  def change
    safety_assured { add_column :records, :conversion_status, :integer, default: 0 }
  end
end
