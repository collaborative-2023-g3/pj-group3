module V1
  module Auth
    # RegistrationsController はユーザー登録処理を担うコントローラ
    # DeviseTokenAuth gemを拡張して、特定の登録パラメータを許可
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      #before_action :configure_permitted_parameters, only: [:create]
      # POST /resource
      def create
        super do |resource|
          @profile = resource.build_profile(profile_params)
          @profile.save
        end
      end
      private
      def sign_up_params
        params.permit(:email, :password, :user_name, :user_type)
      end

      def profile_params
        params.permit(:zip_code, :prefecture, :city, :block, :phone_number)
      end
    end
  end
end
