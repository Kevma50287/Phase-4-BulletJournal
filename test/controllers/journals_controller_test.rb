require "test_helper"

class JournalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @journal = journals(:one)
  end

  test "should get index" do
    get journals_url, as: :json
    assert_response :success
  end

  test "should create journal" do
    assert_difference("Journal.count") do
      post journals_url, params: { journal: { name: @journal.name, user_id: @journal.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show journal" do
    get journal_url(@journal), as: :json
    assert_response :success
  end

  test "should update journal" do
    patch journal_url(@journal), params: { journal: { name: @journal.name, user_id: @journal.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy journal" do
    assert_difference("Journal.count", -1) do
      delete journal_url(@journal), as: :json
    end

    assert_response :no_content
  end
end
