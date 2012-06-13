require "spec_helper"
describe FbController do
	
    describe "routing"   do

        it "routes to #new" do
            get("/fb/new").should route_to("fb#new")
    end
      it "routes to #create" do
            get("/fb/create").should route_to("fb#create")
    end
      it "routes to #viewtime" do
            get("/fb/viewtime").should route_to("fb#viewtime")
    end
    
    
    
    
    end
    end