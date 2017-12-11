(function() {
  const {
    PageWrapper,
    PageBackground, PageBackgroundImage, PageShadow,
    PageContent, PageHeader, PageText
  } = pageflow.react.components;

  function Page(props) {
    return (
      <PageWrapper>
        <PageBackground>
        </PageBackground>

        <PageContent>
          <LocalfocusIframe/>
        </PageContent>
      </PageWrapper>
    );
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
