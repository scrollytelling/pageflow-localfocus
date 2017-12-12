pageflow.localfocus.ConfigurationEditorView = pageflow.ConfigurationEditorView.extend({
  configure: function() {
    this.tab('general', function() {
      this.input('text', pageflow.TextAreaInputView);
      this.input('text_position', pageflow.SelectInputView, {values: pageflow.Page.textPositions});
    });

    this.tab('widget', function() {
      this.input('chart', pageflow.localfocus.UrlInputView, {
        propertyName: 'localfocus_url'
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
