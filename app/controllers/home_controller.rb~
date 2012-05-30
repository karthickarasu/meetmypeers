class HomeController < ApplicationController

def feed
            @user = User.new
end
def feedback
            @user = User.find_by_id(current_user.id)
	#@user.major1=params[:user][:major1]
       @user.update_attributes(params[:user])
            redirect_to '/home/profilepage'


end


def peer

@home=User.all
#@user = User.paginate :page => params[:page], :per_page => 5
#paginate :per_page => 5, :page => page,
#@users = User.paginate(:page => params[:page])
#User.where(:published => true).paginate(:page => params[:page]).order('id DESC')
   # @user = User.paginate_by_user_id @user.id, :page => params[:page]
      #@user = User.paginate :page => params[:page], :per_page => 3
    @home = User.paginate :page => params[:page], :per_page => 5 
p "fffffffffffffffffffffffffffffffffffffffff"
 @home.each{|f| puts f.id}
p "gggggggggggggggggggggggggggggggggggggggggg"

    respond_to do |format|
      format.html # index.html.erb
      format.xml { render :xml => @home }
    end
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
 def showparent
   @user=User.find_by_id(current_user.id)

    respond_to do |format|
    format.html # show.html.erb
   format.xml  { render :xml => @user }
  end
  end
def editparent1
    @user=User.find_by_id(current_user.id)
    @user.update_attributes(params[:user])
    redirect_to '/home/profilepage'
    end
def profilepage
end
def editedu
    @user=User.find_by_id(current_user.id)
end
def new
            @user = User.new
end
def create

            @user = User.find_by_id(current_user.id)
	#@user.major1=params[:user][:major1]
       @user.update_attributes(params[:user])
            redirect_to '/home/profilepage'


end
def editwork
    @user=User.find_by_id(current_user.id)
end
             


def editwork
    @user=User.find_by_id(current_user.id)
end
def edwork
            @user = User.new
end
def edup
            @user = User.find_by_id(current_user.id)
	#@user.major1=params[:user][:major1]
       @user.update_attributes(params[:user])
            redirect_to '/home/profilepage'


end
 #def destroy
    #@user = User.find_by_id(current_user.id)
    #@user.destroy
    #redirect_to '/home/profile1'
      	    
 #end


def viewwork
 @user=User.find_by_id(current_user.id)

    respond_to do |format|
    format.html # show.html.erb
   format.xml  { render :xml => @user }
      #@user=User.find_all_by_user_id(current_user.id)
end

    end

def viewedu
 @user=User.find_by_id(current_user.id)

    respond_to do |format|
    format.html # show.html.erb
   format.xml  { render :xml => @user }
      #@user=User.find_all_by_user_id(current_user.id)
end

    end




end
