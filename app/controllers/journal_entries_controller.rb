class JournalEntriesController < ApplicationController
  before_action :set_journal
  before_action :set_journal_entry, only: %i[ show update destroy ]
  
  # GET /journal_entries
  def index
    @journal_entries = @journal.journal_entries.order(:date)

    render json: @journal_entries
  end

  # GET /journal_entries/1
  def show
    render json: @journal_entry
  end

  # POST /journal_entries
  def create
    # Merge an object containing the journal_id param with the journal_entry_params object
    @journal_entry = JournalEntry.new(journal_entry_params.merge({journal_id: params[:journal_id]}))
    if @journal_entry.save
      # Update current user's mood upon submission
      render json: @journal_entry, status: :created
    else
      render json: @journal_entry.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /journal_entries/1
  def update
    if @journal_entry.update(journal_entry_params)
      render json: @journal_entry
    else
      render json: @journal_entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /journal_entries/1
  def destroy
    @journal_entry.destroy
    render json:{Entry: "Has been successfully deleted", journal_entry: @journal_entry}, status: 202
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_journal_entry
    @journal_entry = @journal.journal_entries.find_by!(id:params[:id])
  end

  def set_journal
    @journal = Journal.find_by!(id: params[:journal_id])
  end
  
  # Only allow a list of trusted parameters through.
  def journal_entry_params
    # Need to declare activties as an array with "=> []"
    params.require(:journal_entry).permit(:date, :emotion, :entry, :activities => [])
  end
end


#authorization required to be able to make an entry 