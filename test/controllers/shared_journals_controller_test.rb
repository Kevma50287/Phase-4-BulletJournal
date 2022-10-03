require "test_helper"

class SharedJournalsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @shared_journal = shared_journals(:one)
  end

  test "should get index" do
    get shared_journals_url, as: :json
    assert_response :success
  end

  test "should create shared_journal" do
    assert_difference("SharedJournal.count") do
      post shared_journals_url, params: { shared_journal: { journal_id: @shared_journal.journal_id, user_id: @shared_journal.user_id } }, as: :json
    end

    assert_response :created
  end

  test "should show shared_journal" do
    get shared_journal_url(@shared_journal), as: :json
    assert_response :success
  end

  test "should update shared_journal" do
    patch shared_journal_url(@shared_journal), params: { shared_journal: { journal_id: @shared_journal.journal_id, user_id: @shared_journal.user_id } }, as: :json
    assert_response :success
  end

  test "should destroy shared_journal" do
    assert_difference("SharedJournal.count", -1) do
      delete shared_journal_url(@shared_journal), as: :json
    end

    assert_response :no_content
  end
end
