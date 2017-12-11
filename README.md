# 📊 LocalFocus integration for Pageflow

[LocalFocus](https://www.localfocus.nl/en/) lets you create and share
animated illustrations for a wide range of datasets.

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

## Usage

TODO: Write usage instructions here

## Development

After checking out the repo, run `bin/setup` to install dependencies. Then, run `rake spec` to run the tests. You can also run `bin/console` for an interactive prompt that will allow you to experiment.

To install this gem onto your local machine, run `bundle exec rake install`. To release a new version, update the version number in `version.rb`, and then run `bundle exec rake release`, which will create a git tag for the version, push git commits and tags, and push the `.gem` file to [rubygems.org](https://rubygems.org).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/scrollytelling/pageflow-localfocus.
