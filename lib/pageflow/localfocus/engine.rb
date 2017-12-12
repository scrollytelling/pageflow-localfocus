module Pageflow
  module Localfocus
    class Engine < Rails::Engine
      isolate_namespace Pageflow::Localfocus

      config.autoload_paths << File.join(config.root, 'lib')

      config.generators do |g|
        g.test_framework :rspec
      end

      # This has been fixed in newer versions of react-rails.
      initializer "pageflow-localfocus.add_watchable_files", group: :all do |app|
        app.config.watchable_files.concat Dir["#{config.root}/app/assets/javascripts/**/*.jsx*"]
      end
    end
  end
end
