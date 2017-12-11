/**
 * Input view for an URL.
 *
 * @see {@link module:pageflow/ui.pageflow.inputView pageflow.inputView} for further options
 * @class
 * @memberof module:pageflow/localfocus
 */
pageflow.localfocus.UrlInputView = Backbone.Marionette.ItemView.extend({
  mixins: [pageflow.inputView],

  template: 'pageflow/chart/editor/templates/url_input',

  ui: {
    input: 'input'
  },

  onRender: function() {
    load();
  },

  onChange: function() {
    save();
    validate();
  }

  initialize: function() {
    this.listenTo(this.ui.input, 'input', this.onChange);
  }

  load: function() {
    this.ui.input.val(this.model.get(this.options.propertyName));
  },

  save: function() {
    this.model.set(this.options.propertyName, this.ui.input.val());
  },

  validate: function() {
    if (this.ui.input.validity.valid) {
      this.resetValidationError();
    }
    else {
      this.displayValidationError(I18n.t('pageflow.localfocus.views.inputs.text_input_view.required_field'));
    }
  },

  displayValidationError: function(message) {
    this.$el.addClass('invalid');
    this.ui.input.attr('title', message);
  },

  resetValidationError: function(message) {
    this.$el.removeClass('invalid');
    this.ui.input.attr('title', '');
  }
});
