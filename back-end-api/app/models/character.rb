class Character < ApplicationRecord

    has_many :elements, dependent: :destroy
    belongs_to :user


end
