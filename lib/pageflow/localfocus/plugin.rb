module Pageflow
  module Localfocus
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.features.register(PageTypeFeature.new(Localfocus.page_type))
      end
    end
  end
end
