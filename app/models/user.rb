class User < ApplicationRecord

    has_many :visits
    has_many :visited_eateries, through: :visits, source: :eatery

    has_secure_password

    before_save {self.email = email.downcase}
    VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

    validates :email, presence: true, uniqueness: true, format: {with: VALID_EMAIL_REGEX }
    validates :email, uniqueness: {case_sensitive: false}
    validates :password, presence: true, length: {minimum: 3}
    # validates :password_confirmation, presence: true

end
