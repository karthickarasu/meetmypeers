class FbController < ApplicationController
	  before_filter :authenticate_user!
  


def new
            @user = User.new
end
def create
	
	
	@user=User.find_by_id(current_user.id)
    @user.update_attributes(params[:user])
         redirect_to '/home/profilepage'


end
def viewtime
 @user=User.find_all_by_id(current_user.id)


    end
    
    




 

end
