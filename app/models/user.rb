class User < ApplicationRecord
    has_secure_password

    has_many :visits
    has_many :eateries, through: :visits

    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    validates_presence_of :password, :email
    validates :email, uniqueness: true, format: {with: VALID_EMAIL_REGEX }
    validates :email, uniqueness: {case_sensitive: false}
    validates :password, length: {minimum: 3}

end
