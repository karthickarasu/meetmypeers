class AddRequestToMessages < ActiveRecord::Migration
  def self.up
    add_column :messages, :request, :boolean
  end

  def self.down
    remove_column :messages, :request
  end
end
