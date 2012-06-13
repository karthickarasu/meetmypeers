require "spec_helper"
describe MessageController do
	
    describe "routing"   do

        it "routes to #inbox" do
            get("/inbox").should route_to("message#inbox")
    end
         it "routes to #outbox" do
            get("/outbox").should route_to("message#outbox")
    end
    
    
    it "routes to #sendmessage" do
            get("/message/sendmessage").should route_to("message#sendmessage")
    end
    
    
    it "routes to #write" do
			{:get => "/write/1"}.should route_to(:controller => "message", :action => "write", :id=>"1")

		end
		
		
		
		 it "routes to #msgin" do
			{:get => "/msgin/1"}.should route_to(:controller => "message", :action => "msgin", :id=>"1")

		end
		
		 it "routes to #msgout" do
			{:get => "/msgout/1"}.should route_to(:controller => "message", :action => "msgout", :id=>"1")

		end
		
		 it "routes to #reply" do
			{:get => "/reply/1"}.should route_to(:controller => "message", :action => "reply", :id=>"1")

		end
    
    end
    end