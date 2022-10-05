class AuthController < ApplicationController
  skip_before_action :authorized, only: [:create]

  def create
    @user = User.find_by(username: user_login_params[:username])
    #User#authenticate comes from BCrypt
    if @user&.authenticate(user_login_params[:password])
      # encode token comes from ApplicationController
      token = generate_token(@user.id)
      # FIXME: Refactor
      render json: { user: @user, jwt: token, journals: @user.journals}, status: :accepted
    else
      render json: { message: 'Invalid username or password' }, status: :unauthorized
    end
  end

  # TODO:Check this
  # def create
  #   @user = User.find_by(username: user_login_params[:username])
  #   #User#authenticate comes from BCrypt
  #   if @user&.authenticate(user_login_params[:password])
  #     # encode token comes from ApplicationController
  #     token = generate_token(@user.id)
  #     cookies[:jwt] ||= token
  #     render json: { user: @user, cookies: cookies.to_hash }, status: :accepted
  #   else
  #     render json: { message: 'Invalid username or password' }, status: :unauthorized
  #   end
  # end

  private

  def user_login_params
    # params { user: {username: 'Chandler Bing', password: 'hi' } }
    params.require(:user).permit(:username, :password, :password_confirmation)
  end
end
