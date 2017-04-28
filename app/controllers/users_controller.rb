class UsersController < ApplicationController
  
  before_action :require_none, only: [:new]
  
  def new
    @user = User.new
  end
  
  def create 
    @user = User.new(user_params) 
    if @user.save
      session[:user_id] = @user.id 
      redirect_to '/home'     
    else 
      redirect_to '/signup' 
    end 
  end 
  
  private
    def user_params
      
      params.require(:user).permit(:name, :username, :password);
    end
  
end
