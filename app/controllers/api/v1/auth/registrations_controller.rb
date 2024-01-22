module Api
  module V1
    module Auth
      # ユーザー登録時にプロフィールも同時に作成するためにオーバーライド
      class RegistrationsController < DeviseTokenAuth::RegistrationsController
        def create
          super do |resource|
            @profile = resource.build_profile(profile_params)
            @profile.save

            # if resource
            #   token = generate_jwt_token(resource)
            #   # カスタムレスポンスの返却
            #   render json: { user: resource, token: token }, status: :ok and return
            # end
          end
        end

        private

        # def generate_jwt_token(resource)
        #   payload = { user_id: resource.id }
        #   JWT.encode(payload, Rails.application.secrets.secret_key_base)
        # end

        def sign_up_params
          params.permit(:email, :password, :user_name, :user_type)
        end

        def profile_params
          params.permit(:zip_code, :prefecture, :city, :block, :phone_number)
        end
      end
    end
  end
end
