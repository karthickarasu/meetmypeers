class RegistrationsController < Devise::RegistrationsController
	  before_filter :authenticate_user!
 
#validates simple_captcha
def new
    resource = build_resource({})
    respond_with_navigational(resource){ render_with_scope :new }
  end

  # POST /resource
  def create
    build_resource
#if simple_captcha_valid?
# do this
#else
 # do that
#end
#@user.valid_with_captcha?

#@user.save_with_captcha


 @user = User.create( params[:user] )
 @user.avatar = nil
 @user.save
#Email.send_mail(@user).deliver  #include this line in your users_controller.rb file
    if resource.save
      if resource.active_for_authentication?
        set_flash_message :notice, :signed_up if is_navigational_format?
        sign_in(resource_name, resource)
        respond_with resource, :location => after_sign_up_path_for(resource)
      else
        set_flash_message :notice, :inactive_signed_up, :reason => inactive_reason(resource) if is_navigational_format?
        expire_session_data_after_sign_in!
        respond_with resource, :location => after_inactive_sign_up_path_for(resource)
      end
    else
      clean_up_passwords(resource)
      respond_with_navigational(resource) { render_with_scope :new }
    end
  end

  # GET /resource/edit
  def edit
   
    render_with_scope :edit
  end

  # PUT /resource
  # We need to use a copy of the resource because we don't want to change
  # the current user in place.
  def update
  @user = User.create( params[:user] )
    self.resource = resource_class.to_adapter.get!(send(:"current_#{resource_name}").to_key)

    if resource.update_with_password(params[resource_name])
      set_flash_message :notice, :updated if is_navigational_format?

      sign_in resource_name, resource, :bypass => true
      respond_with resource, :location => after_update_path_for(resource)
    else
      clean_up_passwords(resource)
      respond_with_navigational(resource){ render_with_scope :edit }
    end
  end
 



 end
