class SessionsController < ApplicationController

    def create
        # binding.pry
        user = User.find_by(handle: user_params[:handle])
        render json: user
    end

    private

    def user_params
        params.require('user').permit(:handle, :password)
    end

end
