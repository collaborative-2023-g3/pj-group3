module V1
  module Auth
    # RegistrationsController はユーザー登録処理を担うコントローラ
    # DeviseTokenAuth gemを拡張して、特定の登録パラメータを許可
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      private

      def sign_up_params
        params.permit(:email, :password, :password_confirmation, :user_name, :user_type)
      end
    end
  end
end
