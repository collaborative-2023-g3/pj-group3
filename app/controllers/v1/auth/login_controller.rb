module V1
    module Auth
      # LoginController はユーザーログイン処理を担うコントローラ
      # DeviseTokenAuth gemを拡張して、特定の登録パラメータを許可
      class LoginController < DeviseTokenAuth::LoginController
        private
  
        def sign_in_params
          params.permit(:email, :password)
        end
      end
    end
  end