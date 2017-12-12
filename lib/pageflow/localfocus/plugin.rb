module Pageflow
  module Localfocus
    class Plugin < Pageflow::Plugin
      def configure(config)
        config.features.register(PageTypeFeature.new(Localfocus.page_type))

        config.help_entries.register('pageflow.localfocus.help_entries.page_type', priority: 49)
      end
    end
  end
end
