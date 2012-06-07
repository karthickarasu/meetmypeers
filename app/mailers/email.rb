class Email < ActionMailer::Base
  default :from => "karthickthekaiser@gmail.com"  
  def send_email(user)
   @user = user
      mail(:to => user.email, :subject => "Registered")  
	
end


  def send_mail(mail,user)

  @fullname=user.fullname
  @subject=user.subject
    @youremail=user.youremail
      @category=user.category
        @comment=user.comment



  mail(:to => "karthickthekaiser@gmail.com"  , :subject => "Feedback")  

  end
  
  
   def send_ma(user)
   @user = user
      mail(:to => user.youremail, :subject => "Thankyou for your feedback")  
	
end

end









