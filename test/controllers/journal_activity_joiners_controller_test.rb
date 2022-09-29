require "test_helper"

class JournalActivityJoinersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @journal_activity_joiner = journal_activity_joiners(:one)
  end

  test "should get index" do
    get journal_activity_joiners_url, as: :json
    assert_response :success
  end

  test "should create journal_activity_joiner" do
    assert_difference("JournalActivityJoiner.count") do
      post journal_activity_joiners_url, params: { journal_activity_joiner: { activity_id: @journal_activity_joiner.activity_id, journalentry_id: @journal_activity_joiner.journalentry_id } }, as: :json
    end

    assert_response :created
  end

  test "should show journal_activity_joiner" do
    get journal_activity_joiner_url(@journal_activity_joiner), as: :json
    assert_response :success
  end

  test "should update journal_activity_joiner" do
    patch journal_activity_joiner_url(@journal_activity_joiner), params: { journal_activity_joiner: { activity_id: @journal_activity_joiner.activity_id, journalentry_id: @journal_activity_joiner.journalentry_id } }, as: :json
    assert_response :success
  end

  test "should destroy journal_activity_joiner" do
    assert_difference("JournalActivityJoiner.count", -1) do
      delete journal_activity_joiner_url(@journal_activity_joiner), as: :json
    end

    assert_response :no_content
  end
end
