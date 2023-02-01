class VisitsController < ApplicationController

    before_action :authorize, only: [:index, :create, :update, :destroy]

    def index
        visits = user_visits
        render json: visits, status: :ok
    end

    def show
        visit = user_visits.find(params[:id])
        render json: visit, status: :ok
    end

    def create
        visit = Visit.create!(visit_params)
        render json: visit, status: :created
    end

    def update
        visit = user_visits.find(params[:id])
        visit.update!(visit_params)
        render json: visit, status: :accepted
    end

    def destroy
        visit = user_visits.find(params[:id])
        visit.destroy
        head :no_content
    end

private

    def user_visits
        visits = Visit.where(:user_id => current_user.id)
    end

    def visit_params
        params.permit(:date, :occasion, :notes, :drink, :appetizer, :food, :dessert, :other_consumables, :visit_img, :rating)
    end

end
