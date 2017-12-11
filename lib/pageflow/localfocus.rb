require 'pageflow/localfocus/engine'

module Pageflow
  module Localfocus
    def self.plugin
      Localfocus::Plugin.new
    end

    def self.page_type
      Pageflow::React.create_page_type('localfocus')
    end
  end
end
