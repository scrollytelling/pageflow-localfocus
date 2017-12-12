(function() {
  class Frame extends React.Component {
    render() {
      return (
        <div className="lf-frame">
          <div className="lf-loading"></div>
          <iframe
            className="localfocusvisual"
            scrolling="no"
            frameBorder="0"
            style={{width: '100%', height: '550px', overflow: 'hidden'}}
            ref={iframe => this.iframe = iframe}
            src="https://localfocus2.appspot.com/551a9626918b3">
          </iframe>
        </div>
      )
    }

    shouldComponentUpdate() {
      return false;
    }
  }

  const {connectInPage, combine} = pageflow.react;

  pageflow.localfocus.Frame = connectInPage(combine({
  }))(Frame);
}());
