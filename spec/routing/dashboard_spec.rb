require "spec_helper"
describe DashboardController do
	
    describe "routing"   do

        it "routes to #profile" do
            get("/dashboard/profile").should route_to("dashboard#profile")
    end
    
    
    end
    end