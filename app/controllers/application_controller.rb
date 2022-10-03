class ApplicationController < ActionController::API
  before_action :authorized
  rescue_from ActiveRecord::InvalidRecord, with: :render_unprocessable
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from JWT::DecodeError, with: :render_token_error

  def get_secret_key
    "i_love_corn"
  end

  def generate_token(user_id)
    JWT.encode({user_id:user_id}, get_secret_key)
  end
# in order to get decoded token u need a request that has aurhotization header token 
  def auth_header
    # { 'Authorization': 'Bearer <token>' }
    request.headers['Authorization']
  end

  def decode_token
    if auth_header 
      token = auth_header.split(' ')[1] #taking string and seperating into an array based on the argument
      # [{user_id: id}, {alg: XXXX}]
      JWT.decode(token, get_secret_key)[0]["user_id"]
    end
  end

  def current_user
    if decode_token # in order to login user u need to get decoded token 
      # decode_token=> [{"user_id"=>2}, {"alg"=>"HS256"}]
      # or nil if we can't decode the token
      user_id = decode_token[0]['user_id']
      @user = User.find_by!(id: user_id)
    end
  end

  def logged_in?
    !!current_user
  end


  private

  # Dynamic error handling functions
  def render_not_found(exception)
    render json: {errors:"#{exception.model} not found"}, status: :render_not_found
  end

  def render_unprocessable(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_token_error
    nil
  end

  def authorized
    # Only allows actions to take place if user has a valid token, aka Logged In
    render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
  end
end
