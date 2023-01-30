class UsersController < ApplicationController

    before_action :authorize, only: [:update, :destroy]

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
        user = logged_in_user.find(params[:id])
        user.update!(user_params)
    end

    def destroy
        user = logged_in_user.find(params[:id])
        user.destroy
        head :no_content
    end

private

    def user_signup_params
        params.permit(:email, :password, :password_confirmation)
    end

    def user_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :location, :bio, :avatar)
    end

    def logged_in_user
        User.where(:id => current_user.id)
    end

end
