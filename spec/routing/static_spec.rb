require "spec_helper"
describe StaticController do
	
    describe "routing"   do

        it "routes to #aboutus" do
            get("/static/aboutus").should route_to("static#aboutus")
    end
    
    
    
    it "routes to #contactus" do
            get("/static/contactus").should route_to("static#contactus")
    end
    
    
     it "routes to #contactus" do
            get("/static/legal").should route_to("static#legal")
    end
    
     it "routes to #contactus" do
            get("/static/friends").should route_to("static#friends")
    end
    
    
    
    
    end
    end