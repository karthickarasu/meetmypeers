class UserController < ApplicationController

				def index
									@user=User.find(:all)
				end
				def new
									@user=User.new
				end
				def create
								puts params.inspect
								@user=User.create(params[:user])
								@user.save
								@user=User.find(:all)
								render :action=>'index'	
				end					
end


