class SharedJournalsController < ApplicationController
  before_action :set_shared_journal, only: %i[ show update destroy ]

  # GET /shared_journals
  def index
    @shared_journals = SharedJournal.all

    render json: @shared_journals
  end

  # GET /shared_journals/1
  def show
    render json: @shared_journal
  end

  # POST /shared_journals
  def create
    @shared_journal = SharedJournal.new(shared_journal_params)

    if @shared_journal.save
      render json: @shared_journal, status: :created, location: @shared_journal
    else
      render json: @shared_journal.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /shared_journals/1
  def update
    if @shared_journal.update(shared_journal_params)
      render json: @shared_journal
    else
      render json: @shared_journal.errors, status: :unprocessable_entity
    end
  end

  # DELETE /shared_journals/1
  def destroy
    @shared_journal.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_shared_journal
      @shared_journal = SharedJournal.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def shared_journal_params
      params.require(:shared_journal).permit(:user_id, :journal_id)
    end
end
