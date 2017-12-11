require 'pageflow/plugin'

module Pageflow
  module Localfocus
    class Plugin < Pageflow::Plugin
      config.page_types.register(Pageflow::React.create_page_type('localfocus'))
    end
  end

  def self.plugin
    Plugin.new
  end
end
