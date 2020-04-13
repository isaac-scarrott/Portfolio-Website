import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import LinksIcons from './LinksBar';
import { navigate } from 'gatsby';

const NavBar = styled.nav`
  z-index: 5000;
  position: fixed;
  width: 100%;
  top: ${props => (props.navVisible ? '0px' : '-65px')};
  height: 45px;
  background-color: ${props => props.theme.colours.primary};
  display: grid;
  grid-template-columns: 25% 50% 25%;
  grid-template-rows: 1fr;
  padding: 10px 0;
  transition: 0.2s;
`;

const NameContainer = styled.div`
  margin: 0 0 0 10px;
`;

const ToggleButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;

  & button {
    text-align: center;
    cursor: pointer;
    color: ${props => props.theme.colours.text};

    &:first-of-type {
      &:before {
        content: ${props => (props.isDarkMode ? '"Dark"' : '"Light"')};
      }
    }

    &:last-of-type {
      &:before {
        content: 'Home';
      }
    }
  }
`;

export default function Nav({ isDarkMode, toggleIsDarkMode }) {
  const [previousScrollPosition, setPreviousScrollPosition] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  );
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset;

      if (
        window.location.pathname === '/' &&
        window.innerHeight / 4 > currentScrollPos
      ) {
        return;
      }
      setPreviousScrollPosition(prevPos => {
        setNavVisible(prevPos > currentScrollPos);
        setPreviousScrollPosition(window.pageYOffset);
      });
    });

    return () =>
      window.removeEventListener('scroll', setPreviousScrollPosition);
  }, []);

  return (
    <NavBar navVisible={navVisible}>
      <NameContainer>
        <div>Isaac</div> <div>Scarrott</div>
      </NameContainer>
      <LinksIcons />
      <ToggleButtonsContainer isDarkMode={isDarkMode}>
        <button onClick={() => toggleIsDarkMode()} />
        <button onClick={() => navigate('/')} />
      </ToggleButtonsContainer>
    </NavBar>
  );
}
