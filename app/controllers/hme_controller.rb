class HmeController < ApplicationController
	  before_filter :authenticate_user!
  def index
@user.valid_with_captcha?

@user.save_with_captcha
   
  end

  def new
  end

  def show
  end

  def edit
  end

  def create
  end

  def update
  end

  def destroy
  end

end
