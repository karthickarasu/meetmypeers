class AddColumnToUsers < ActiveRecord::Migration
  def self.up
    add_column :users, :fromdate, :date
    add_column :users, :todate, :date
    add_column :users, :fromtime, :time
    add_column :users, :totime, :time
    add_column :users, :day, :string
  end

  def self.down
    remove_column :users, :day
    remove_column :users, :totime
    remove_column :users, :fromtime
    remove_column :users, :todate
    remove_column :users, :fromdate
  end
end
