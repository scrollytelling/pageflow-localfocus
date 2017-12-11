(function() {
  class LocalfocusIframe extends React.Component {
    render() {
      return (
        <iframe
          className="localfocusvisual"
          scrolling="no"
          frameborder="0"
          style={{width: '100%', height: '550px', overflow: 'hidden'}}
          ref={iframe => this.iframe = iframe}
          src="https://localfocus2.appspot.com/551a9626918b3?api=1">
        </iframe>
      )
    }
  }

  const {connectInPage, combine} = pageflow.react;

  pageflow.localfocus.LocalfocusIframe = connectInPage(combine({

  }))(LocalfocusIframe);
}());
