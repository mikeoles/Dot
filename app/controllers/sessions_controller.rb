class SessionsController < ApplicationController
 
  before_action :require_none, only: [:new]
  
  def new
  end
  
  def create
    @user = User.find_by_username(params[:session][:username])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      redirect_to '/home'
    else
      redirect_to '/login'
    end 
  end
  
  def destroy
    User.find(session[:user_id]).destroy      
    session[:user_id] = nil         
    redirect_to '/forsale' 
  end   
  
end
