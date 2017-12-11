module Pageflow
  module Localfocus
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.page_types.register(Pageflow::Localfocus.page_type)
      end
    end
  end
end
