pageflow.localfocus.ConfigurationEditorView = pageflow.ConfigurationEditorView.extend({
  configure: function() {
    this.tab('general', function() {
      this.input('text', pageflow.TextAreaInputView);
      this.input('text_position', pageflow.SelectInputView, {values: pageflow.Page.textPositions});
    });

    this.tab('widget', function() {
      this.input('chart', pageflow.localfocus.UrlInputView, {
        propertyName: 'localfocus_url',
        required: true,
        pattern: "https://localfocus2.appspot.com/.*", // I18n.t('pageflow.localfocus.placeholder', {locale: pageflow.entry.configuration.get('locale')})
        title: "Only localfocus URLs are allowed",
        placeholder: "https://localfocus2.appspot.com/551a9626918b3"
      })
    });

    this.tab('files', function() {
      // Renders background type select box and file input views
      this.group('background');

      this.input('thumbnail_image_id', pageflow.FileInputView, {
        collection: 'image_files',
        positioning: false
      });
    });

    this.tab('options', function() {
      this.group('options');
    });
  }
});
