require 'spec_helper'

describe Friendship do
  
	before(:each) do
		@message = Friendship.new(:id => "",
					:user_id => "5",
					:friend_id => "11"
					
					)
					
				end
				
				
				 it { should belong_to(:user)}
	

				
			end