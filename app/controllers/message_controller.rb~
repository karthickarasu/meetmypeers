class MessageController < ApplicationController
def inbox
		@message=Message.find_all_by_receiver(current_user.id)
		@rec=Array.new
		@message.each do |msg|
			a=User.find_by_id(msg.sender)
			@rec<< a.first_name
                 end
	end
	
	
	
	def write
		
		@sender=current_user.id
		@receiver=User.find_by_id(params[:id])
	end
	
	def sendmessage
		@msg=Message.new(params[:message])
		@msg.save
		redirect_to '/inbox'
	end
	
	def outbox
		@mesg=Message.find_all_by_sender(current_user.id)
		@rec=Array.new
		@mesg.each do |msg|
			a=User.find_by_id(msg.receiver)
			@rec<< a.first_name
		end
		
	end
	
	def msgout
		@msg=Message.find_by_id(params[:id])
		
	end
	
	def msgin
		@msg=Message.find_by_id(params[:id])
        end
	
end
