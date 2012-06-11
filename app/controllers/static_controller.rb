class StaticController < ApplicationController
	  before_filter :authenticate_user!
layout nil
  def aboutus
  end

  def contactus
  end

  def legal
  end

  def friends
  end

end
