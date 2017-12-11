
lib = File.expand_path("../lib", __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "pageflow/localfocus/version"

Gem::Specification.new do |spec|
  spec.name          = "pageflow-localfocus"
  spec.version       = Pageflow::Localfocus::VERSION
  spec.authors       = ["Joost Baaij"]
  spec.email         = ["joost@spacebabies.nl"]

  spec.summary       = "Localfocus charts integration for Pageflow"
  spec.description   = "Localfocus charts integration for Pageflow"
  spec.homepage      = "https://github.com/scrollytelling/pageflow-localfocus"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_dependency 'pageflow', '~> 12.x'
  spec.add_dependency 'pageflow-public-i18n', '~> 1.12.x'
  spec.add_dependency 'rails'

  spec.add_development_dependency "bundler", "~> 1.16"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
end
