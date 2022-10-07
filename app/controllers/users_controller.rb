class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  # before_action :set_user, only: %i[ show update destroy ]

  # GET /profile
  def profile
    puts "user id: #{@user_id}"
    @user_id = decode_token
    if @user_id
      @user = User.find_by!(id: @user_id)
      render json: @user
    else 
      render json: {error: "401 incorrect token"}, status: 401
    end
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    
    @first_journal = Journal.create!({
      name:"Yumo Journal"
      }
    )
    #Default primary journal id is set
    #Default mood is neutral
    @user.update!({
      primary_journal_id: @first_journal.id
      }
    )
    SharedJournal.create!({
      journal_id:@first_journal.id,
      user_id:@user.id
    })
    @token = generate_token(@user.id)
    render json: {user: @user, recent_mood:"neutral", jwt: @token, journals: @user.journals, friends:@user.friends_array}, status: :created
  end

  # TODO: Allow users to update their user info and delete their account

  #PATCH /users/1 
  def update 
    current_user.update!(user_params)
    render json: current_user 
  end
  
   # DELETE /users/1
   def destroy
    @user.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  # def set_user
  #   @user = User.find_by!(id:params[:id])
  # end
  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:email, :username, :password_confirmation, :password, :first_name, :last_name, :phone_number, :primary_journal_id, :profile_picture)
  end

    
end
