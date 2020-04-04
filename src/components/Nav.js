import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colours from '../styles/colours';

export const NavLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 200000002;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`;

const keyframes1 = keyframes`
  0% { -webkit-transform: scale(0.0); }
  30% { -webkit-transform: scale(0.0); }
  100% { -webkit-transform: scale(1); }
`;

export const NavLink = styled.div`
  color: #597f7c;
  font-size: 30px;
  font-weight: 900;
  z-index: 200000000;
  animation: ${keyframes1} 0.5s;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const Circle = styled.div`
  width: ${props => (props.navOpen ? '180%' : '80px')};
  height: ${props => (props.navOpen ? '180%' : '80px')};
  position: fixed;
  right: ${props => (props.navOpen ? '-400px' : '0')};
  top: ${props => (props.navOpen ? '-400px' : '0')};
  margin: 10px;
  border-radius: 50%;
  background-color: ${colours.secondary};
  transition: 0.4s;
  z-index: 200000001;
`;

export const Hamburger = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  right: 0;
  margin: 25px;
  cursor: pointer;
  z-index: 200000002;
`;

export const HamburgerSpan = styled.div`
  width: 80%;
  height: 4px;
  right: 0;
  border-radius: 20%;
  background-color: #597f7c;
`;

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'visible';
  }, [navOpen]);

  const render = () => {
    return navOpen ? (
      <NavLinksContainer>
        <NavLink navOpen key="home">
          Home
        </NavLink>
        <NavLink navOpen key="skills">
          Skills
        </NavLink>
        <NavLink navOpen key="blog">
          Blog
        </NavLink>
      </NavLinksContainer>
    ) : null;
  };

  return (
    <>
      <div>
        {render()}

        <Circle navOpen={navOpen}></Circle>
        <Hamburger
          onClick={() => {
            setNavOpen(oldNavOpen => !oldNavOpen);
          }}
        >
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
        </Hamburger>
      </div>
    </>
  );
}
