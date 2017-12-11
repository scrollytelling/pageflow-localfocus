require 'rails'
require 'rails/engine'

module Pageflow
  module Localfocus
    class Engine < ::Rails::Engine
      isolate_namespace Pageflow::Localfocus
    end
  end
end
