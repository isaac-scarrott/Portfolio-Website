import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import device from '../styles/mediaQueryStuff';

const animateNavLinks = keyframes`
  0% { -webkit-transform: scale(0.0); }
  30% { -webkit-transform: scale(0.0); }
  100% { -webkit-transform: scale(1); }
`;

export const NavLinksContainer = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 200000002;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: ${props => props.theme.colours.primary};
    font-size: 30px;
    font-weight: 600;
    z-index: 200000000;
    animation: ${animateNavLinks} 0.5s;
    transition: transform 0.3s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const ExpandingCircle = styled.div`
  width: ${props => (props.navOpen ? '180%' : '200px')};
  height: ${props => (props.navOpen ? '180%' : '80px')};
  position: fixed;
  transform: rotate(0deg);
  right: ${props => (props.navOpen ? '-400px' : '0')};
  top: ${props => (props.navOpen ? '-400px' : '0')};
  margin: 10px;
  border-radius: ${props => (props.navOpen ? '50%' : '30px')};
  background-color: ${props => props.theme.colours.secondary};
  transition: 0.4s;
  z-index: 200000001;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${device.mobile} {
      width: ${props => (props.navOpen ? '250%' : '200px')};
  }
`;

export const Circle = styled.div`
  width: 200px;
  height: 80px;
  position: fixed;
  transform: rotate(0deg);
  right: 0;
  top: 0;
  margin: 10px;
  border-radius: 30px;
  background-color: ${props => props.theme.colours.secondary};
  transition: 0.4s;
  z-index: 200000002;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Hamburger = styled.button`
  width: 50px;
  height: 50px;
  right: 30px;
  position: fixed;
  cursor: pointer;
  z-index: 200000002;

  &:hover + ${Circle} {
    transform: scale(1);
  }

  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    right: 0;
    border-radius: 20%;
    background-color: ${props => props.theme.colours.primary};
    transition: .25s ease-in-out;
    transform: rotate(0deg);

    &:nth-child(1) {
      top: ${props => (props.navOpen ? '23px' : '10px')};
      width: ${props => (props.navOpen ? '0%' : '100%')};
      left: ${props => (props.navOpen ? '50%' : '0')};
    }

    &:nth-child(2) {
      top: 23px;
      transform: ${props => (props.navOpen ? 'rotate(45deg)' : 'rotate(0deg)')};
    }

    &:nth-child(3) {
      transform: ${props =>
        props.navOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
      top: 23px;
    }

    &:nth-child(4) {
      bottom: 10px;
      top: ${props => (props.navOpen ? '25px' : '36px')};
      width: ${props => (props.navOpen ? '0%' : '100%')};
      left: ${props => (props.navOpen ? '50%' : '0')};
    }
  }
`;

const NightModeToggle = styled.div`
  left: 40px;
  width: 50px;
  text-align: center;
  position: fixed;
  cursor: pointer;
  z-index: 200000002;
  &:hover &:before {
    content: ${props => (props.isDarkMode ? '"Light"' : '"Dark"')};
  }
  &:before {
    left: 50px;
    content: ${props => (props.isDarkMode ? '"Dark"' : '"Light"')};
  }
`;

export default function Nav({isDarkMode, toggleIsDarkMode}) {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = navOpen ? 'hidden' : 'visible';
  }, [navOpen]);

  const renderNavLinks = () => {
    return navOpen ? (
      <NavLinksContainer>
        <a>
          Home
        </a>
        <a>
          Skills
        </a>
        <a>
          Blog
        </a>
      </NavLinksContainer>
    ) : null;
  };

  return (
    <>
      {renderNavLinks()}
      <ExpandingCircle navOpen={navOpen} />
      <Circle>
        <Hamburger
          onClick={() => setNavOpen(oldNavOpen => !oldNavOpen)}
          navOpen={navOpen}
        >
          <span />
          <span />
          <span />
          <span />
        </Hamburger>
        <NightModeToggle
          isDarkMode={isDarkMode}
          onClick={() => toggleIsDarkMode()}
        />
      </Circle>
    </>
  );
}
