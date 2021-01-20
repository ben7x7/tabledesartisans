class Reservation < MailForm::Base
  attributes :name, :email, :phone, :pax, :date, :time, :message, :nickname

  attribute :name,      :validate => true
  validates_format_of :email, :with => /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :phone,     :validate => true
  validates_inclusion_of :pax, :in => 0..9
  validates_exclusion_of :date, :in => %w( Date.today ), :message => "Réservations pour aujourd'hui UNIQUEMENT par téléphone"
  attribute :time,      :validate => true
  attribute :message,   :validate => false
  attribute :nickname,  :captcha  => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "New reservation",
      :to => "contact@tabledesartisans.ch",
      :from => %("#{name}" <#{email}>)
    }
  end
end
