class HomeController < ApplicationController
  
  before_action :require_user, only: [:view]
  
  def view
  end
  
end
