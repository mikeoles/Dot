class WelcomeController < ApplicationController
    
    before_action :require_none, only: [:index]
  
    def index
    end
    
end
