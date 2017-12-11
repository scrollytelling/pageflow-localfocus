//= require_tree ./editor/
//= require_self

pageflow.localfocus = pageflow.localfocus || {};

pageflow.editor.pageTypes.register('localfocus', {
  configurationEditorView: pageflow.localfocus.ConfigurationEditorView
});
