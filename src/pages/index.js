import React from 'react';
import Helmet from 'react-helmet';

import LandingScreen from '../components/LandingScreen';
import SkillsScreen from '../components/SkillsScreen';
import BlogPosts from '../components/BlogPosts';
import Header from '../components/Header';
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

export default function Index() {
  return (
    <>
      <HelmetWrapper />
      <GlobalStyles />
      <Header />
      <LandingScreen />
      <SkillsScreen />
      <BlogPosts />
    </>
  );
};
