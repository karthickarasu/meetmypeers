 require "spec_helper"
describe FriendshipsController do
	
    describe "routing"   do

        it "routes to #friend_show" do
            get("/friendships/friend_show").should route_to("friendships#friend_show")
    end
    
    
    it "routes to #mypeer" do
            get("/friendship/mypeer").should route_to("friendships#mypeer")
    end
    
    it "routes to #addfriend" do
			{:get => "friendship/addfriend/1"}.should route_to(:controller => "friendships", :action => "addfriend", :id=>"1")

		end
		
		
		
		 it "routes to #deny" do
			{:get => "friendship/deny/1"}.should route_to(:controller => "friendships", :action => "deny", :id=>"1")

		end
		
    
    
    
    end
    end