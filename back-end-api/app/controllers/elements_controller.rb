class ElementsController < ApplicationController

    def create
        element = Element.new(element_params)
        element.save
        # binding.pry
        render json: element.character, include: :elements
    end

    private

    def element_params
        params.require("element").permit(
            :icon1, :icon2, :icon3,
            :label1, :label2, :label3,
            :text1, :text2, :text3,
            :active, :character_id
        )
    end

end
