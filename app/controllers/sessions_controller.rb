class SessionsController < ApplicationController

    # before_action: only: [:destroy]

    # "/login" route
    def create
        user = User.find_by(email: params[:email])
            if user&.authenticate(params[:password])
                session[:user_id] = user.id
                render json: user, status: :created
            else
                render json: { errors: ["Invalid username or password"] }, status: :unauthorized
            end
    end

    # "/logout" route
    def destroy
        if current_user
            session.delete :user_id
            head :no_content
        else
            render json: { errors: ["Please Login"] }, status: :unauthorized
        end
    end

end
