class User < ApplicationRecord
    has_many :visits
    has_many :eateries, through: :visits

    validates_presence_of :password, :email
    validates :email, uniqueness: true
    validates :password, length: {minimum: 3}

end
