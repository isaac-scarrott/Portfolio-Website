import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Nav from './Nav';
import NormalisedStyles from '../styles/NormalisedStyles';
import BaseStyles from '../styles/BaseStyles';
import LightModePrismTheme from '../styles/prism-duotone-light';
import DarkModePrismTheme from '../styles/prism-xonokai';
import PageContainer from '../styles/PageContainer';
import { darkThemeColours, lightThemeColours } from '../styles/colours';
import { calculateSunriseAndSunset } from '../utils/calculateSunriseSunset';
import { useEffect } from 'react';
import dayjs from 'dayjs';

export function GlobalStyles({ isDarkMode }) {
  function GetPrismTheme(isDarkMode) {
    if (isDarkMode) {
      return <LightModePrismTheme />;
    }

    return <DarkModePrismTheme />;
  }
  return (
    <>
      <BaseStyles />
      <NormalisedStyles />
      {GetPrismTheme(isDarkMode)}
    </>
  );
}

function HelmetWrapper() {
  const { site } = useStaticQuery(graphql`
    query getSiteMetadata {
      site {
        siteMetadata {
          authorName
          description
          image
          siteLanguage
          siteLocale
          siteUrl
          title
        }
      }
    }
  `);

  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />

      {/* Primary Meta Tags */}
      <title defer={false}>{site.siteMetadata.title}</title>
      <meta name="title" content={site.siteMetadata.title} />
      <meta name="description" content={site.siteMetadata.description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={site.siteMetadata.siteUrl} />
      <meta property="og:title" content={site.siteMetadata.title} />
      <meta property="og:description" content={site.siteMetadata.description} />
      <meta property="og:image" content={site.siteMetadata.image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={site.siteMetadata.siteUrl} />
      <meta property="twitter:title" content={site.siteMetadata.title} />
      <meta
        property="twitter:description"
        content={site.siteMetadata.description}
      />
      <meta property="twitter:image" content={site.siteMetadata.image} />
    </Helmet>
  );
}

export function LayoutWithPageContainer({ children }) {
  return (
    <PageContainer>
      <Layout>{children}</Layout>
    </PageContainer>
  );
}

function getIsDarkModeStored() {
  if (typeof localStorage === 'undefined') {
    return false;
  }

  return localStorage.getItem('isDarkMode') === 'true' ? true : false;
}

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(getIsDarkModeStored());

  function toggleIsDarkMode() {
    setIsDarkMode(oldIsDarkMode => {
      localStorage.setItem('isDarkMode', String(!oldIsDarkMode));
      return !oldIsDarkMode;
    });
  }

  useEffect(() => {
    async function setDarkModeIfNight() {
      const { sunrise, sunset } = await calculateSunriseAndSunset();
      const dateTimeNow = new Date();
      if (
        dateTimeNow <= dayjs(sunrise).add(1, 'day') &&
        dateTimeNow >= sunset
      ) {
        // Updates state but not localStorage
        setIsDarkMode(true);
      }
    }
    setDarkModeIfNight();
  }, []);

  return [isDarkMode, toggleIsDarkMode];
}

export default function Layout({ children }) {
  const [isDarkMode, toggleIsDarkMode] = useDarkMode();

  return (
    <ThemeProvider theme={isDarkMode ? darkThemeColours : lightThemeColours}>
      <HelmetWrapper />
      <GlobalStyles isDarkMode={isDarkMode} />

      <Nav
        isDarkMode={isDarkMode}
        toggleIsDarkMode={() => toggleIsDarkMode()}
      />
      <main>{children}</main>
    </ThemeProvider>
  );
}
