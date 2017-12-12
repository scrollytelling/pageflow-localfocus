/**
 * Input view for a single line of text.
 *
 * @param {boolean} [options.required=false]
 *   Display an error if the input is blank.
 *
 * @see
 * {@link module:pageflow/ui.pageflow.inputWithPlaceholderText pageflow.inputWithPlaceholderText}
 * for placeholder related further options
 *
 * @see {@link module:pageflow/ui.pageflow.inputView pageflow.inputView} for further options
 * @class
 * @memberof module:pageflow/ui
 */
pageflow.localfocus.UrlInputView = Backbone.Marionette.ItemView.extend({
  mixins: [pageflow.inputView, pageflow.inputWithPlaceholderText],

  template: 'pageflow/localfocus/editor/templates/url_input',

  ui: {
    input: 'input'
  },

  events: {
    'blur input': 'validate'
  },

  onRender: function() {
    this.ui.input.attr('title', I18n.t('pageflow.ui.views.inputs.text_input_view.required_field'));
    this.load();
  },

  save: function() {
    this.model.set(this.options.propertyName, this.ui.input.val());
  },

  load: function() {
    this.ui.input.val(this.model.get(this.options.propertyName));
  },

  validate: function() {
    input = this.ui.input[0];
    if (input.checkValidity()) {
      this.$el.removeClass('invalid');
      this.save();
    }
    else {
      this.$el.addClass('invalid');
    }
  }
});
