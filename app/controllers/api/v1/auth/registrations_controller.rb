module Api
  module V1
    module Auth
      class RegistrationsController < DeviseTokenAuth::RegistrationsController
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
end
