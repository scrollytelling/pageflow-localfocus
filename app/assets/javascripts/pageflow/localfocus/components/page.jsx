(function() {
  const {
    PageWrapper,
    PageBackground, PageBackgroundImage, PageShadow,
    PageContent, PageHeader, PageText
  } = pageflow.react.components;

  const {
    Frame
  } = pageflow.localfocus;

  class Page extends React.Component {
    render() {
      return (
        <PageWrapper>
          <PageBackground>
          </PageBackground>

          <PageContent>
            <Frame/>
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
    )(Page)
  });
}());
