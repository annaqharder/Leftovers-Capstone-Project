class EateriesController < ApplicationController

    before_action :authorize, only: [:index, :create, :update, :destroy]

    wrap_parameters format: []

    def index
        eateries = user_eateries
        render json: eateries, status: :ok
    end

    def show
        eatery = user_eateries.find(params[:id])
        render json: eatery, serialzier: EateryWithVisitsSerializer , status: :ok
    end

    def create
        eatery = Eatery.create!(eatery_params)
        render json: eatery, status: :created
    end

    def update
        eatery = user_eateries.find(params[:id])
        eatery.update!(eatery_params)
        render json: eatery, status: :accepted
    end

    def destroy
        eatery = user_eateries.find(params[:id])
        eatery.destroy
        head :no_content
    end

private

    def user_eateries
        Eatery.where(:user_id => current_user.id)
    end

    # shows just the eateries made by the user that is logged in
    def eatery_params
        params.permit(:eatery_location, :eatery_name, :eatery_address)
    end

end
