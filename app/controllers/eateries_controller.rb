class EateriesController < ApplicationController

    before_action :authorize, only: [:index, :create, :update, :destroy]

    wrap_parameters format: []

    def index
        eateries = user_eateries
        render json: eateries, status: :ok
    end

    def show
        eatery = user_eateries.find(params[:id])
        render json: eatery, serialzier: EateryWithVisitsSerializer, status: :ok
    end

    def create
        eatery = Eatery.create!(user_id: current_user.id, eatery_name: params[:eatery_name], eatery_address: params[:eatery_address], eatery_neighborhood:params[:eatery_neighborhood], eatery_category:params[:eatery_category], eatery_type:params[:eatery_type], have_visited:params[:have_visited])
        render json: eatery, status: :created
    end

    def update
        eatery = user_eateries.find(params[:id])
        eatery.update!(eatery_params)
        render json: eatery, status: :accepted
    end

    def destroy
        eatery = Eatery.find(params[:id])
        eatery.destroy
        head :no_content
    end

private

    def user_eateries
        Eatery.where(:user_id => current_user.id)
    end

    def eatery_params
        params.permit(:eatery_location, :eatery_name, :eatery_address, :eatery_category, :eatery_type, :have_visited, :user_id, :id)
    end

end
