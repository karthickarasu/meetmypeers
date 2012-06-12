class FriendshipsController < ApplicationController
	  before_filter :authenticate_user!
def create  
    @friendship = current_user.friendships.build(:friend_id => params[:friend_id])  
    if @friendship.save  
      flash[:notice] = "Added friend."  
      redirect_to root_url  
    else  
      flash[:error] = "Error occurred when adding friend."  
      redirect_to root_url  
    end  
  end  
  
  def destroy  
    @friendship = current_user.friendships.find(params[:id])  
    @friendship.destroy  
    flash[:notice] = "Successfully destroyed friendship."  
    redirect_to root_url  
  end  
  
  def addfriend
    @add=Friendship.new
    @add.friend_id=params[:id]
    @add.user_id=current_user.id

puts @add.inspect
    if @add.save
      
    redirect_to  "/friendship/mypeer"
   flash[:notice] = "Added friend."  
    else
      flash[:error] = "Error occurred when adding friend."  
    end
  end

   def mypeer
	       @friendship= User.paginate :page => params[:page], :per_page => 5 

p    "============================================="
    @friendship=Friendship.find_all_by_user_id(current_user.id)
	@friend=Array.new
 	@friendship.each do |f|
		puts f.friend_id
		@friend<<User.find_by_id(f.friend_id)
puts @friend.inspect
	end
puts @friend.inspect
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
       # @avail=Friendship.find_by_user_id(friend_id) 

    @avail.destroy   


#@avail=Friendship.find_by_id(params[:id]) 
    #@avail.destroy  if @avail.present?
    #@avail=current_user.friendships.find_by_user_id(params[:id]) 
    #@avail.delete if @avail.present?
    redirect_to  "/friendship/mypeer"
  end
  
  
  
  
  
end
