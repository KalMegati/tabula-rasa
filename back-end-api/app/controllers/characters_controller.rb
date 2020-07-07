class CharactersController < ApplicationController

    def index
        characters = Character.all
        render json: characters
    end

    def create
        character = Character.new(character_params)
        character.save
        render json: character
    end

    def show
        character = Character.find(params[:id])
        render json: character, include: :elements
    end

    private

    def character_params
        params.require("character").permit(:name, :blurb, :user_id)
    end

end
