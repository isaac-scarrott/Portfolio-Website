import React from 'react';

import Nav from './Nav';
import PageContainer from '../styles/PageContainer';
import NormalisedStyles from '../styles/NormalisedStyles';
import BaseStyles from '../styles/BaseStyles';

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
export default function Layout() {
  return (
    <HelmetWrapper />
    <GlobalStyles />
    <Nav/>
    <PageContainer>
      {children}
    </PageContainer>
  );
}
