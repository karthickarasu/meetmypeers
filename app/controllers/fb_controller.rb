class FbController < ApplicationController
	  before_filter :authenticate_user!
  


def new
            @user = User.new
end
def create
	
	
	@user=User.find_by_id(current_user.id)
    @user.update_attributes(params[:user])
           # @user = User.find_by_id(current_user.id)
       #@user.update_attributes(params[:user])
puts params[:user].inspect

            redirect_to '/home/profilepage'


end
def viewtime
 @user=User.find_all_by_id(current_user.id)
p 11111111111111
p @user
    respond_to do |format|
    format.html # show.html.erb
   format.xml  { render :xml => @user }
      #@user=User.find_all_by_user_id(current_user.id)
end

    end
    
    




 

end
