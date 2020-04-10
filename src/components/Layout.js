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
      <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"/>
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
