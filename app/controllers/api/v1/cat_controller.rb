module Api
  module V1
    # 里親募集猫の表示・登録・削除を行う
    class CatController < ApplicationController
      before_action :set_cat, only: %i[destroy]

      # 募集ステータス 1:募集中に設定
      CAN_APPLY_STATUS = 1

      def index
        render json: { cats: Cat.all.order("created_at DESC") }
      end

      def create
        cat = Cat.new(cat_params)
        max_cat_id = Cat.maximum(:cat_id) || 0
        cat[:cat_id] = max_cat_id + 1
        cat[:status] = CAN_APPLY_STATUS

        if cat.save
          render json: { status: 200, message: "登録に成功しました" }
        else
          render json: { status: 422, message: "登録に失敗しました", errors: cat.errors.full_messages }
        end
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
end
