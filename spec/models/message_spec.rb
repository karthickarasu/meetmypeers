require 'spec_helper'

describe Message do
  
	before(:each) do
		@message = Message.new(:id => "",
					:sender => "5",
					:receiver => "11", 
					:subject=>"saswin",
					:message=>"parthi"
					)
					
				end
				
			end