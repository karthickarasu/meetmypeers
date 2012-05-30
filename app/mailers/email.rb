class Email < ActionMailer::Base
  default :from => "karthickthekaiser@gmail.com"  
  def send_email(user)
   @user = user
      mail(:to => user.email, :subject => "Registered")  
	
  end

end




