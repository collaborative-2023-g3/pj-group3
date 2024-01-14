module V1
  module Auth
    # RegistrationsController はユーザー登録処理を担うコントローラ
    # DeviseTokenAuth gemを拡張して、特定の登録パラメータを許可
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      # ユーザー登録時にuser_profileも同時に登録するための処理
      def create
        super do |resource|
          user_profile = user_profile_params
          user = resource
          user_profile[:uid] = user.uid
          UserProfile.create(user_profile)
        end
      end

      private

      def sign_up_params
        params.permit(:email, :password, :password_confirmation, :user_name, :user_type)
      end

      # user_profile_paramsを定義
      def user_profile_params
        params.permit(:zip_code, :prefecture, :city, :block, :phone_number)
      end
    end
  end
end
