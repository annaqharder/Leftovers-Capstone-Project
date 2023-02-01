class UsersController < ApplicationController

    # skip_before_action :authorize, only: [:create]

    # testing purposes to see users
    def index
        render json: User.all, status: :ok
    end

    # "/signup" route
    def create
        user = User.create!(user_signup_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # "/me" route
    def show
        render json: current_user
    end

    def update
        puts params[:email]
        user = User.find(params[:id])
        user.update!(first_name: params[:first_name], last_name: params[:last_name], location: params[:location], bio: params[:bio], avatar: params[:avatar], email: params[:email], password: params[:password])
    end

    def destroy
        user = logged_in_user.find(params[:id])
        user.destroy
        head :no_content
    end

private

    def user_signup_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation)
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :location, :bio, :avatar, :id)
    end

    def logged_in_user
        User.where(:id => current_user.id)
    end

end
