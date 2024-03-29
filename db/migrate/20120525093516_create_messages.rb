class CreateMessages < ActiveRecord::Migration
  def self.up
    create_table :messages do |t|
      t.integer :sender
      t.integer :receiver
      t.string :subject
      t.text :message

      t.timestamps
    end
  end

  def self.down
    drop_table :messages
  end
end
