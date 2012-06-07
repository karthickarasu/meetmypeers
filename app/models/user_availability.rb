class UserAvailability < ActiveRecord::Base
belongs_to :user
belongs_to :availability
end
