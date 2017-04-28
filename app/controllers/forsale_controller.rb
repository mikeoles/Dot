class ForsaleController < ApplicationController
  
  before_action :require_none, only: [:view]
  
  def view
  end
  
end
