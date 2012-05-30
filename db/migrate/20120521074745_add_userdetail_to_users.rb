class AddUserdetailToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :starttime, :integer
    add_column :users, :endtime, :integer
    add_column :users, :meetingpurpose, :string
    add_column :users, :state, :string
 
    add_column :users, :avatar_file_size, :integer
    add_column :users, :avatar_content_type, :string
    add_column :users, :avatar_updated_at, :datetime
    add_column :users, :avatar_file_name, :string
  end

  def self.down
    remove_column :users, :avatar_file_name
    remove_column :users, :avatar_updated_at
    remove_column :users, :avatar_content_type
    remove_column :users, :avatar_file_size
    remove_column :users, :state
    remove_column :users, :meetingpurpose
    remove_column :users, :endtime
    remove_column :users, :starttime
  end
end
