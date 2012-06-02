class User < ActiveRecord::Base
has_many :messages
  # Include default devise modules. Others available are:
  # :token_authenticatable, :encryptable, :confirmable, :lockable, :timeoutable and :omniauthable

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable


  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me, :avatar, :first_name, :last_name, :gender, :addressline1, :major1, :title, :fullname, :comment, :subject
  has_attached_file :avatar,  :default_url => "/images/images.jpg",:styles => { :medium => "300x300", :thumb => "100x100" },
      :storage => :s3,
     :s3_credentials => "#{RAILS_ROOT}/config/s3.yml"

 #validates_presence_of  :first_name,:last_name,:addressline1,:addressline2,:major1,:title,:fullname, :comment, :subject, :citytown, :interest
				
#validates_attachment :avatar, :presence => true,
  #:content_type => { :content_type => "avatar/jpg" }

#validates_file_presence :avatar 
#validates_file_size :avatar, :less_than => 1.megabytes, :message => 'file size maximum 1 MB allowed' #validates_file_content_type :avatar, :content_type => ['avatar/jpeg', 'avatar/png', 'avatar/gif', 'avatar/bmp', 'avatar/pjpeg', 'avatar/x-png']


end
