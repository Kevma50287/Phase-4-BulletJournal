class JournalActivityJoinersController < ApplicationController
  before_action :set_journal_activity_joiner, only: %i[ show update destroy ]

  # GET /journal_activity_joiners
  def index
    @journal_activity_joiners = JournalActivityJoiner.all

    render json: @journal_activity_joiners
  end

  # GET /journal_activity_joiners/1
  def show
    render json: @journal_activity_joiner
  end

  # POST /journal_activity_joiners
  def create
    @journal_activity_joiner = JournalActivityJoiner.new(journal_activity_joiner_params)

    if @journal_activity_joiner.save
      render json: @journal_activity_joiner, status: :created, location: @journal_activity_joiner
    else
      render json: @journal_activity_joiner.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /journal_activity_joiners/1
  def update
    if @journal_activity_joiner.update(journal_activity_joiner_params)
      render json: @journal_activity_joiner
    else
      render json: @journal_activity_joiner.errors, status: :unprocessable_entity
    end
  end

  # DELETE /journal_activity_joiners/1
  def destroy
    @journal_activity_joiner.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_journal_activity_joiner
      @journal_activity_joiner = JournalActivityJoiner.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def journal_activity_joiner_params
      params.require(:journal_activity_joiner).permit(:journalentry_id, :activity_id)
    end
end
