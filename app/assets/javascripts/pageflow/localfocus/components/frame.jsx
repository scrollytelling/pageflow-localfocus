(function() {
  class Frame extends React.Component {
    render() {
      return (
        <div className="lf-frame">
          <div className="lf-loading"></div>
          <iframe
            src={this.props.page.localfocusUrl}
            className={this.props.className}
            scrolling={this.props.scrolling}
            frameBorder={this.props.frameBorder}
            style={this.props.style}
            ref={iframe => this.iframe = iframe}
          >
          </iframe>
        </div>
      )
    }
  }

  Frame.defaultProps = {
    className: 'localfocusvisual',
    scrolling: 'no',
    frameBorder: '0',
    style: {width: '100%', height: '550px', overflow: 'hidden'}
  }

  const {connectInPage, combine} = pageflow.react;

  pageflow.localfocus.Frame = connectInPage(combine({
  }))(Frame);
}());
