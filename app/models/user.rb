class User < ActiveRecord::Base
has_many :messages
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

validates_format_of :email, :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i , :message => "Please enter a valid email address"
validates_uniqueness_of :email, :message => " Email address already exists"
validates :password, :presence =>{:message => "Please enter a password (6 - 32 characters)"}
validates :password,:length=>{:in=>6..32,:message => "Please enter a password (6 - 32 characters)"}
validates_confirmation_of :password, :message=>"Sorry, that password doesn't match. Please try again."
validates :first_name, :format=>{:with =>/^[a-zA-Z\ ]+$/, :message => "First name can only contain letters"}
validates :first_name, :length=>{:in=>2..40, :message => "Please enter first name (2-40 characters)"}

validates :last_name, :format=>{:with =>/^[a-zA-Z\ ]+$/, :message => "last name can only contain letters"}
validates :last_name, :length=>{:in=>2..40, :message => "Please enter last name (2-40 characters)"}



  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :avatar, :first_name, :last_name, :gender, :addressline1, :major1, :title, :fullname, :comment, :subject, :major2, :companyname, :jobcategory, :description, :jobstart, :jobend, :state, :citytown, :institution   
  has_attached_file :avatar,  :default_url => "/images/images.jpg",:styles => { :medium => "300x300", :thumb => "100x100" },
      :storage => :s3,
     :s3_credentials => "#{RAILS_ROOT}/config/s3.yml"

 #validates_presence_of  :first_name,:last_name,:addressline1,:addressline2,:major1,:title,:fullname, :comment, :subject, :citytown, :interest
				
#validates_attachment :avatar, :presence => true,
  #:content_type => { :content_type => "avatar/jpg" }

#validates_file_presence :avatar 
#validates_file_size :avatar, :less_than => 1.megabytes, :message => 'file size maximum 1 MB allowed' #validates_file_content_type :avatar, :content_type => ['avatar/jpeg', 'avatar/png', 'avatar/gif', 'avatar/bmp', 'avatar/pjpeg', 'avatar/x-png']


end
