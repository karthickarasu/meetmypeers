class HomeController < ApplicationController
	  before_filter :authenticate_user!
def edwork
            @user = User.new
end
    
def editwork
    @user=User.find_by_id(current_user.id)
end
def edup
            @user = User.find_by_id(current_user.id)
	#@user.major1=params[:user][:major1]
       @user.update_attributes(params[:user])
            redirect_to '/home/profilepage'


end
def viewwork
 @user=User.find_by_id(current_user.id)

    respond_to do |format|
    format.html # show.html.erb
   format.xml  { render :xml => @user }
      #@user=User.find_all_by_user_id(current_user.id)
end
end


def feed
            @user = User.new
end
def feedback
      
	@user = User.find_by_id(current_user.id)
       @user.update_attributes(params[:user])
       @user.save
	@mail=params[:user]

       	Email.send_mail(@mail,@user).deliver 
	Email.send_ma(@user).deliver 
	  redirect_to '/home/profilepage'

end



 def search
  p params[:name]
if@user=User.find_by_email(params[:name])
else
@user=User.find_by_first_name(params[:name])
end
  end

def editparent
    @user=User.find_by_id(current_user.id)
end
def editparent1
    @user=User.find_by_id(current_user.id)
    @user.update_attributes(params[:user])
    redirect_to '/home/profilepage'
    end
def profilepage
end




def new
            @user = User.new
end
def editedu
    @user=User.find_by_id(current_user.id)
end
def create

            @user = User.find_by_id(current_user.id)
	#@user.major1=params[:user][:major1]
       @user.update_attributes(params[:user])
            redirect_to '/home/profilepage'
end

def viewedu
 @user=User.find_by_id(current_user.id)

    respond_to do |format|
    format.html # show.html.erb
   format.xml  { render :xml => @user }
      #@user=User.find_all_by_user_id(current_user.id)
end
end



def fulldetails
	@home=User.find_all_by_id(params[:id])

end	


def peer

@home=User.all
@home = User.paginate :page => params[:page], :per_page => 5 
 @home.each{|f| puts f.id}
respond_to do |format|
      format.html # index.html.erb
      format.xml { render :xml => @home }
    end
end 




end
