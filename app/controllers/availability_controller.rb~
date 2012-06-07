class AvailabilityController < ApplicationController
before_filter :authenticate_user!  
  def new
    @ava=User.new
  end
  def create
    p params[:ava1]
    @ava1 = User.new(params[:ava])
    @ava1=current_user.id
    @ava1.save
    redirect_to "/availability/show"
  end
  def show	
    @edit_avail=User.find_all_by_user_id(current_user.id)
  end
  def edit
    @edit_avail = User.find(params[:id])
  end
  def update
   @edit_avail=User.find(params[:id])
   @edit_avail.update_attributes(params[:availability])
    redirect_to "/availability/show"
  end
  def destroy
    @avail=User.find_by_user_id(current_user.id) 
    @avail.destroy
    redirect_to  "/availability/show"
  end
  def invite
    @n=params[:option]
    @k= @n.keys
    @l=@k.to_s
    @y=@l.to_i
    @invite=UserAvailability.create(:peer_id => current_user.id, :availability_id => @y,:status => "open", :user_id=>params[:id])
    redirect_to "/home/viewprofile"
  end
end
