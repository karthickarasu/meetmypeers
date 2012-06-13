require "spec_helper"
describe HomeController do
	
    describe "routing"   do

        it "routes to #feed" do
            get("/home/feed").should route_to("home#feed")
    end
         it "routes to #feedback" do
            get("/home/feedback").should route_to("home#feedback")
    end
    
     it "routes to #create" do
            get("/home/create").should route_to("home#create")
    end
    
     it "routes to #editparent" do
            get("/home/editparent").should route_to("home#editparent")
	    
    end
     it "routes to #editedu" do
            get("/home/editedu").should route_to("home#editedu")
    end
     it "routes to #editwork" do
            get("/home/editwork").should route_to("home#editwork")
    end
     it "routes to #editparent1" do
            get("/home/editparent1").should route_to("home#editparent1")
    end
     it "routes to #profilepage" do
            get("/home/profilepage").should route_to("home#profilepage")
	    
    end
     it "routes to #new" do
            get("/home/new").should route_to("home#new")
    end
     it "routes to #edwork" do
            get("/home/edwork").should route_to("home#edwork")
        end
     it "routes to #edup" do
            get("/home/edup").should route_to("home#edup")
    end
     it "routes to #viewwork" do
            get("/home/viewwork").should route_to("home#viewwork")
    end
     it "routes to #viewedu" do
            get("/home/viewedu").should route_to("home#viewedu")
	    
    end
     it "routes to #destroy" do
            get("/home/destroy").should route_to("home#destroy")
    end
     it "routes to #profile1" do
            get("/home/profile1").should route_to("home#profile1")
    end
     it "routes to #search" do
            get("/home/search").should route_to("home#search")
    end
     it "routes to #fulldetails" do
			{:get => "/home/fulldetails/1"}.should route_to(:controller => "home", :action => "fulldetails", :id=>"1")

		end
    
    
    


    
    end
end
