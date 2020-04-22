import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';

import LinksIcons from './LinksBar';
import { navigate } from 'gatsby';

const Circle = styled.div`
  position: relative;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background: ${props =>
    props.isDarkMode
      ? `linear-gradient(40deg, white, white 70%)`
      : `linear-gradient(40deg, #fada5e, #f9a602 70%)`};

  div:first-of-type {
    position: absolute;
    border-radius: 100%;
    right: 0;
    width: 23px;
    height: 23px;
    background: ${props => props.theme.colours.primary};
    transform: scale(${props => (props.isDarkMode ? 1 : 0)});
    transform-origin: top right;
    transition: transform 0.6s cubic-bezier(0.645, 0.045, 0.355, 1);
  }
`;

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
  box-shadow: 0px 6px 26px 3px rgba(0, 0, 0, 0.4);
  color: white;
`;

const NameContainer = styled.div`
  margin: 0 0 0 10px;
`;

const ToggleButtonsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  & button {
    display: flex;
    text-align: center;
    cursor: pointer;
    color: white;
    svg {
      fill: white !important;
    }
  }
`;

export default function Nav({ isDarkMode, toggleIsDarkMode }) {
  const [previousScrollPosition, setPreviousScrollPosition] = useState(
    typeof window !== 'undefined' ? window.pageYOffset : 0
  );
  const [navVisible, setNavVisible] = useState(
    !(
      typeof window !== 'undefined' &&
      window.location.pathname.includes('/skills/')
    )
  );

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
        <Circle isDarkMode={isDarkMode} onClick={toggleIsDarkMode}>
          <div />
        </Circle>
        <button onClick={() => navigate('/')}>
          {' '}
          <FaHome size={30} />
        </button>
      </ToggleButtonsContainer>
    </NavBar>
  );
}
