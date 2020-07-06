class User < ApplicationRecord

    has_many :characters, dependent: :destroy

    has_secure_password

end
