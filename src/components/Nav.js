import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colours from '../styles/colours';

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
    color: #597f7c;
    font-size: 30px;
    font-weight: 900;
    z-index: 200000000;
    animation: ${animateNavLinks} 0.5s;
    transition: transform 0.3s;

    &:hover {
      cursor: pointer;
      transform: scale(1.1);
    }
  }
`;

export const Circle = styled.div`
  width: ${props => (props.navOpen ? '180%' : '80px')};
  height: ${props => (props.navOpen ? '180%' : '80px')};
  position: fixed;
  transform: rotate(0deg);
  right: ${props => (props.navOpen ? '-400px' : '0')};
  top: ${props => (props.navOpen ? '-400px' : '0')};
  margin: 10px;
  border-radius: 50%;
  background-color: ${colours.secondary};
  transition: 0.4s;
  z-index: 200000001;
`;

export const Hamburger = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 0;
  margin: 25px;
  cursor: pointer;
  z-index: 200000002;

  span {
    display: block;
    position: absolute;
    width: 100%;
    height: 4px;
    right: 0;
    border-radius: 20%;
    background-color: #597f7c;
    transition: .25s ease-in-out;
    transform: rotate(0deg);

    &:nth-child(1) {
      top: ${(props) => props.navOpen ? '23px': '10px'};
      width: ${(props) => props.navOpen ? '0%': '100%'};
      left: ${(props) => props.navOpen ? '50%': '0'};
    }

    &:nth-child(2) {
      top: 23px;
      transform: ${(props) => props.navOpen ? 'rotate(45deg)': 'rotate(0deg)'};
    }

    &:nth-child(3) {
      transform: ${(props) => props.navOpen ? 'rotate(-45deg)': 'rotate(0deg)'};
      top: 23px;
    }

    &:nth-child(4) {
      bottom: 10px;
      top: ${(props) => props.navOpen ? '25px': '36px'};
      width: ${(props) => props.navOpen ? '0%': '100%'};
      left: ${(props) => props.navOpen ? '50%': '0'};
    }
  }
`;

export default function Nav() {
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
      <div>
        {renderNavLinks()}

        <Circle navOpen={navOpen}></Circle>
        <Hamburger
          onClick={() => setNavOpen(oldNavOpen => !oldNavOpen)}
          navOpen={navOpen}
        >
          <span/>
          <span/>
          <span/>
          <span/>
        </Hamburger>
      </div>
    </>
  );
}
