class DashboardController < ApplicationController

  def profile
    @user=User.find(current_user)

  end

  def preference
	p=params[:preference]
	u=User.find(current_user.id)
	u.update_attributes(:new_member_notification_preference=>p[:notification], :private_message_preference=>p[:message], :send_offer_preference=>p[:offer])
	#render :partial=>"preference"
	redirect_to edit_user_password_path
end

end
