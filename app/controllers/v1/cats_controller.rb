module V1
  # 里親募集猫の表示・登録・削除を行う
  class CatsController < ApplicationController
    before_action :set_cat, only: %i[destroy]

    def index
      render json: { cats: Cat.all.order("created_at DESC") }
    end

    def create
      cat = Cat.new(cat_params)
      max_cat_id = Cat.maximum(:cat_id) || 0
      cat[:cat_id] = max_cat_id + 1
      cat[:status] = 1
      cat.save
    end

    def destroy
      cat = Cat.find(params[:id])
      cat.destroy
    end

    private

    def set_cat
      @cat = Cat.find(params[:id])
    end

    def cat_params
      params.permit(:name, :breed, :image, :date_of_birth, :sex, :uid)
    end
  end
end
