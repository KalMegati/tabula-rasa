class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :characters
    end

    def create
        # binding.pry
        user = User.new(user_params)
        if user.save
            render json: user, include: :characters
            session[:user] = user
        else
            render json: {some: "ERROR"}
        end
        # render json: {some: "ERROR"}
    end

    private

    def user_params
        params.require('user').permit(:handle, :password, :password_confirmation, :icon)
    end

end
