class RenameFilenameToVbmsFilenameOnDocuments < ActiveRecord::Migration[5.1]
  def change
    rename_column :documents, :filename, :vbms_filename
  end
end
