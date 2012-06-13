require 'spec_helper'

describe User do
  
	before(:each) do
		@user = User.new(:id => "",
					:email => "sas@gmail.com",
					:encrypted_password => "2a$10$SGQaGy.JkE.u.onbifWgme4EbMFbAIx4tsEvkeWd3Fk", 
					:first_name=>"saswin",
					:last_name=>"parthi",
					:gender=>"male",
					:addressline1=>"trichy",
					:addressline2=>"chennai",
					:citytown=>"salem",
					:interest=>"football",
					:collegeuniversity=>"mookambigaai",
					:major1=>"computerscience",
					:major2=>"it",
					:degreeyear=>"2000",
					:companyname=>"sedin",
					:title=>"software",
					:jobcategory=>"solutions",
					:jobstart=>"2000",
					:jobend=>"2000",
					:totalyearofexperience=>"5",
					:fullname=>"vinay",
					:description=>"ssss",
					:website=>"google.com",
					:subject=>"ssssss",
					:comment=>"fffff",
					:category=>"notbad",
					:state=>"tamilnadu",
					:avatar_file_size=>"123456",
					:avatar_content_type=>"jjj/jpeg",
					:avatar_updated_at=>"222222",
					:avatar_file_name=>"karthick",
					:youremail=>"karthick@gmail.com",
					:from_time=>"222",
					:to_time=>"444",
					:days=>"8"
					)
	end
	

	 it { should have_many(:friendships)}
	
end

