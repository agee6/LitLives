class User < ActiveRecord::Base
  validates :username, presence: true, uniqueness: true
  validates :session_token, uniqueness: true, presence:true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize :ensure_session_token
  has_many :books,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "Book"
  has_one :bookshelves,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: "BookShelf"

  attr_reader :password


  def self.find_by_credentials(username, password)
    user = User.find_by(username:username)

    if user.nil?
      return nil
    end
    if user.is_password?(password)
      return user
    else
      nil
    end

  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end
