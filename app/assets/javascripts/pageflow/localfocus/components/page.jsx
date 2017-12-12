(function() {
  const {
    PageWrapper,
    MediaPageBackground, PageBackgroundImage, PageShadow,
    PageContent, PageHeader, PageText
  } = pageflow.react.components;

  const {
    Frame
  } = pageflow.localfocus;

  class Page extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <PageWrapper>
          <MediaPageBackground page={this.props.page} />

          <PageContent>
            <Frame page={this.props.page}/>
            <PageText page={this.props.page} />
          </PageContent>
        </PageWrapper>
      );
    }
  }

  const {registerPageType, connectInPage, combine} = pageflow.react;
  const {pageAttributes} = pageflow.react.selectors;

  registerPageType('localfocus', {
    component: connectInPage(
      combine({
        page: pageAttributes()
      })
    )(Page),

    // Enable page state reducers and sagas to handle playback
    reduxModules: [
      pageflow.react.mediaPageBackgroundReduxModule
    ]
  });
}());
