class DashboardController < ApplicationController
  before_filter :authenticate_user!
  def profile
    @user=User.find(current_user)

  end

 def fulldetails
	 end

end
