pageflow.localfocus.ConfigurationEditorView = pageflow.ConfigurationEditorView.extend({
  configure: function() {
    this.tab('general', function() {
      this.group('general');
    });

    this.tab('files', function() {
      this.input('link', pageflow.localfocus.UrlInputView, {
        required: true,
        pattern: "https://localfocus2.appspot.com/.*", // I18n.t('pageflow.localfocus.placeholder', {locale: pageflow.entry.configuration.get('locale')})
        title: "Only localfocus URLs are allowed",
        placeholder: "https://localfocus2.appspot.com/551a9626918b3"
      })
    });

    this.tab('options', function() {
      this.group('options');
    });
  }
});
