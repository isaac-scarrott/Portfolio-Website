import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import dayjs from 'dayjs';

import Nav from './Nav';
import NormalisedStyles from '../styles/NormalisedStyles';
import BaseStyles from '../styles/BaseStyles';
import LightModePrismTheme from '../styles/prism-duotone-light';
import DarkModePrismTheme from '../styles/prism-xonokai';
import PageContainer from '../styles/PageContainer';
import { darkThemeColours, lightThemeColours } from '../styles/colours';
import { calculateSunriseAndSunset } from '../utils/calculateSunriseSunset';
import { HelmetWrapper } from './Helmet';

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
