class AddColumnToUser < ActiveRecord::Migration
  def self.up
    add_column :users, :from_time, :time
    add_column :users, :to_time, :time
    add_column :users, :days, :string
    add_column :users, :youremail, :string
  end

  def self.down
    remove_column :users, :youremail
    remove_column :users, :days
    remove_column :users, :to_time
    remove_column :users, :from_time
  end
end
