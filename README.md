# 📊 LocalFocus integration for Pageflow

[LocalFocus](https://www.localfocus.nl/en/) lets you create and share
animated illustrations for a wide range of datasets. [Example](https://localfocus2.appspot.com/551a9626918b3)

What you are reading now
is a custom integration with Open Source storytelling tool [Pageflow](https://pageflow.io). And it's brought to you by [☢Scrollytelling☣](https://www.scrollytelling.io):
two Amsterdammers❌❌❌ in pyjama with their unstoppable storytelling tank. You're welcome!

### Includes LocalFocus API

The official [LocalFocus JavaScript Widget SDK](https://developers.localfocus.nl/widgets/) is bundled with this plugin.

```
Version: 1.1
Date: 09-01-2017
```

We use it to show a spinner while the chart is loading in the background. When
everything is ready, the chart appears in place. Smooth operator!


## Installation

_(Assuming you know your way around a Rails application and a Unix terminal.)_

Add this line to your application's Gemfile:

```ruby
gem 'pageflow-localfocus'
```

And then execute:

    $ bundle

Register the plugin:

``` ruby
# config/initializers/pageflow.rb
Pageflow.configure do |config|
  config.plugin(Pageflow::Localfocus.plugin)
end
```

Include javascripts and stylesheets:

``` javascript
/* app/assets/javascripts/components.js */
//= require "pageflow/localfocus/components"

/* app/assets/javascripts/pageflow/application.js */
//= require "pageflow/localfocus"

/* app/assets/javascripts/pageflow/editor.js */
//= require pageflow/localfocus/editor
```

``` scss
# app/assets/stylesheets/pageflow/application.scss
@import "pageflow/localfocus";
```

Now you can enable the feature for those accounts that can have it, and enable page type in the feature settings.

## Usage

1. Login as an editor and open any story in the editor
2. Add a new page and choose type **LocalFocus**
3. In the *Widget* tab, enter the graph's _Direct Link_

The graph should appear right away. Happy graphing!

## Want to help developing this plugin?

That's cool and help is always needed!

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/scrollytelling/pageflow-localfocus.

