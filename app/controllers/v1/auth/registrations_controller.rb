module V1
  module Auth
    class RegistrationsController < DeviseTokenAuth::RegistrationsController
      private
      def sign_up_params
        params.permit(:email, :password, :password_confirmation, :user_name, :user_type)
      end
    end
  end
end
