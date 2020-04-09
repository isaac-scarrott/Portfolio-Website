import React from 'react';
import Helmet from 'react-helmet';

import Nav from './Nav';
import NormalisedStyles from '../styles/NormalisedStyles';
import BaseStyles from '../styles/BaseStyles';
import PageContainer from '../styles/PageContainer';

export function GlobalStyles() {
  return (
    <>
      <BaseStyles />
      <NormalisedStyles />
    </>
  );
}

function HelmetWrapper() {
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Heebo"
        rel="stylesheet"
      />
    </Helmet>
  );
}

export function LayoutWithPageContainer({children}) {
    return (
      <PageContainer>
        <Layout>
          {children}
        </Layout>
      </PageContainer>
    );
}

export default function Layout({children}) {
  return (
    <>
      <HelmetWrapper />
      <GlobalStyles />

      <Nav/>
      {children}
    </>
  );
}
