class FriendshipsController < ApplicationController
	  before_filter :authenticate_user!
def addfriend
    @add=Friendship.new
    @add.friend_id=params[:id]
    @add.user_id=current_user.id
	if @add.save
      redirect_to  "/friendship/mypeer"
    end
  end

def mypeer
	@friendship= User.paginate :page => params[:page], :per_page => 5 
	@friendship=Friendship.find_all_by_user_id(current_user.id)
	@friend=Array.new
 	@friendship.each do |f|
		puts f.friend_id
		@friend<<User.find_by_id(f.friend_id)
	end
   end
   
   def friend_show
	   @friendrequest=Friendship.find_all_by_friend_id(current_user.id).map(&:user_id)
	@res=User.find_all_by_id(@friendrequest)
 end
  
   def deny
    @u=Friendship.find_by_user_id(params[:id])
    denypeer=Friendship.find_by_user_id(params[:id])   
      denypeer.destroy 
    redirect_to  "/friendship/mypeer"

	end
  
    def destroy
    @avail=Friendship.find_by_user_id(current_user.id) 
    @avail.destroy   
	redirect_to  "/friendship/mypeer"
  end
  
  
  
  
  
end
