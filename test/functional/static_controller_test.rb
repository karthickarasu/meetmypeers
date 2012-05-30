require 'test_helper'

class StaticControllerTest < ActionController::TestCase
  test "should get aboutus" do
    get :aboutus
    assert_response :success
  end

  test "should get contactus" do
    get :contactus
    assert_response :success
  end

  test "should get legal" do
    get :legal
    assert_response :success
  end

  test "should get friends" do
    get :friends
    assert_response :success
  end

end
