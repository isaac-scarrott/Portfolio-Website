import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'styled-components';

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
  return (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
      <title defer={false}>Isaac Scarrott</title>
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
    if (isDarkMode) {
      return;
    }

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
