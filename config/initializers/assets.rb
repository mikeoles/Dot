# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( pittvideo.ogg )
Rails.application.config.assets.precompile += %w( favicon.ico )
Rails.application.config.assets.precompile += %w( forsale-bundle.js )
Rails.application.config.assets.precompile += %w( welcome-bundle.js )
Rails.application.config.assets.precompile += %w( session-bundle.js )
Rails.application.config.assets.precompile += %w( verify-bundle.js )
Rails.application.config.assets.precompile += %w( user-bundle.js )
Rails.application.config.assets.precompile += %w( home-bundle.js )
Rails.application.config.assets.precompile += %w( contact-bundle.js )
Rails.application.config.assets.precompile += %w( appstoresoon.png )
Rails.application.config.assets.precompile += %w( googleplaysoon.png )
Rails.application.config.assets.precompile += %w( facebook.png )
Rails.application.config.assets.precompile += %w( twitter.png )
Rails.application.config.assets.precompile += %w( menuButton.png )

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
