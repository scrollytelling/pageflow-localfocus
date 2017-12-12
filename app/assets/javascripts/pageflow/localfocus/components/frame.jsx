(function() {
  class Frame extends React.Component {
    render() {
      return (
        <div className="lf-frame">
          <div className="lf-loading"></div>
          <iframe
            src={this.props.page.localfocusUrl}
            className={this.props.className}
            ref={iframe => this.iframe = iframe}
          >
          </iframe>
        </div>
      )
    }
  }

  Frame.defaultProps = {
    className: 'localfocusvisual lf-iframe'
  }

  const {connectInPage, combine} = pageflow.react;

  pageflow.localfocus.Frame = connectInPage(combine({
  }))(Frame);
}());
