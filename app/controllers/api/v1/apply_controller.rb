module Api
  module V1
    # 里親募集猫への応募登録を行う
    class ApplyController < ApplicationController
      def create
        apply = Apply.new(apply_params)

        if apply.save
          render json: { status: 200, message: "応募が完了しました" }
        else
          render json: { status: 422, message: "応募に失敗しました" }
        end
      end

      private

      def apply_params
        params.permit(:cat_id, :uid)
      end
    end
  end
end
