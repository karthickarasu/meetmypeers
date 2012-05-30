class ApplicationController < ActionController::Base
  protect_from_forgery

 include SimpleCaptcha::ControllerHelpers

def after_sign_in_path_for resource_or_scope
	#edit_user_registration_path
      return '/dashboard/profile'
end

def after_sign_out_path_for resource_or_scope
	return '/users/sign_in'
end


end
