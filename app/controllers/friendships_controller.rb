class FriendshipsController < ApplicationController
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
	   @friendrequest=Friendship.find_all_by_user_id(current_user.id).map(&:friend_id)

 end
  
end
