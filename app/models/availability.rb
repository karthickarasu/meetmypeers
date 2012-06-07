class Availability < ActiveRecord::Base
belongs_to :user
has_many :user_availabilities
has_many :users,:through => :user_availabilities,:dependent => :destroy
end
