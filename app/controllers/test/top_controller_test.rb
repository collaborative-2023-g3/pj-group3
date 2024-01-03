require 'test_helper'

class TopControllerTest < ActionDispatch::IntegrationTest
  # indexにgetリクエストが成功した
  test "should get index" do
    get :index
    assert_response :success
  end
end
