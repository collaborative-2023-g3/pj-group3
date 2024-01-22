module Api
  module V1
    module Auth
      # ログイン/ログアウト
      class SessionsController < DeviseTokenAuth::SessionsController
        def create
          # ユーザーの認証を行う
          super do |resource|
            if resource
              # JWTトークンの生成とレスポンスの返却
              token = generate_jwt_token(resource)
              render json: { user: resource, token: token }, status: :ok and return
            end
          end
        end

        private

        def generate_jwt_token(resource)
          payload = { user_id: resource.id }
          JWT.encode(payload, Rails.application.secrets.secret_key_base)
        end
      end
    end
  end
end
