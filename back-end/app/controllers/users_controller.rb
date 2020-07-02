class UsersController < ApplicationController

    def index
        users = User.all
        render json: users, include: :characters
    end

end
