import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

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
    svg {
      fill: white !important;
    }
    &:first-of-type {
      &:before {
        content: ${props => (props.isDarkMode ? '"Dark"' : '"Light"')};
      }
    }
  }
`;

export default function Nav({ isDarkMode, toggleIsDarkMode }) {
  const [previousScrollPosition, setPreviousScrollPosition] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  );
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.location.pathname.includes('/skills/')
    ) {
      setNavVisible(false);

      return;
    }
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
        <button onClick={() => navigate('/')}>
          {' '}
          <FaHome size={30} />
        </button>
      </ToggleButtonsContainer>
    </NavBar>
  );
}
