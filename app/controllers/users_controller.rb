class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create]
  before_action :set_user, only: %i[ show update destroy ]

  # GET /profile
  def profile
    @user_id = decode_token
    if @user_id
      render json: User.find_by!(id: @user_id)
    else 
      render json: {error: "401 incorrect token"}, status: 401
    end
  end

  # POST /users
  def create
    @user = User.create!(user_params)
    @token = generate_token(@user.id)
    render json: {user:@user, jwt: @token}, status: :created
  end

  #PATCH /users/1 
  def update 
    if @user.update(user_params)
      render json: @user 
    else 
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # TODO: Allow users to update their user info and delete their account

   # DELETE /users/1
   def destroy
    @user.destroy
  end

  private
  # Use callbacks to share common setup or constraints between actions.
  def set_user
    @user = User.find_by!(id:params[:id])
  end
  # Only allow a list of trusted parameters through.
  def user_params
    params.require(:user).permit(:email, :username, :password_digest, :first_name, :last_name, :phone_number)
  end

    
end
