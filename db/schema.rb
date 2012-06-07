# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20120607065928) do

  create_table "friendships", :force => true do |t|
    t.integer  "user_id"
    t.integer  "friend_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", :force => true do |t|
    t.integer  "sender"
    t.integer  "receiver"
    t.string   "subject"
    t.text     "message"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "request"
  end

  create_table "myprofiles", :force => true do |t|
    t.string   "firstname"
    t.string   "lastname"
    t.string   "gender"
    t.date     "birthday"
    t.string   "homeaddress"
    t.string   "city"
    t.text     "interest"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "simple_captcha_data", :force => true do |t|
    t.string   "key",        :limit => 40
    t.string   "value",      :limit => 6
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "simple_captcha_data", ["key"], :name => "idx_key"

  create_table "users", :force => true do |t|
    t.string   "email",                                 :default => "", :null => false
    t.string   "encrypted_password",     :limit => 128, :default => "", :null => false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",                         :default => 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.string   "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "first_name"
    t.string   "last_name"
    t.string   "gender"
    t.string   "addressline1"
    t.string   "addressline2"
    t.string   "citytown"
    t.string   "interest"
    t.string   "collegeuniversity"
    t.string   "major1"
    t.string   "major2"
    t.string   "degreeyear"
    t.string   "companyname"
    t.string   "title"
    t.string   "jobcategory"
    t.string   "jobstart"
    t.string   "jobend"
    t.string   "totalyearofexperience"
    t.string   "description"
    t.string   "fullname"
    t.string   "website"
    t.string   "subject"
    t.string   "comment"
    t.string   "category"
    t.integer  "starttime"
    t.integer  "endtime"
    t.string   "meetingpurpose"
    t.string   "state"
    t.integer  "avatar_file_size"
    t.string   "avatar_content_type"
    t.datetime "avatar_updated_at"
    t.string   "avatar_file_name"
    t.date     "fromdate"
    t.date     "todate"
    t.time     "fromtime"
    t.time     "totime"
    t.string   "day"
    t.time     "from_time"
    t.time     "to_time"
    t.string   "days"
    t.string   "youremail"
  end

  add_index "users", ["confirmation_token"], :name => "index_users_on_confirmation_token", :unique => true
  add_index "users", ["email"], :name => "index_users_on_email", :unique => true
  add_index "users", ["reset_password_token"], :name => "index_users_on_reset_password_token", :unique => true

end
