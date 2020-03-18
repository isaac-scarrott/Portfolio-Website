import React, { useState, useEffect } from 'react';
import { NavContainer, Circle, Hamburger, HamburgerSpan } from "./Styles";
import styled from 'styled-components';

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'visible';
  }, [navOpen]);

  return (
    <>
      <NavContainer>
        <Circle navOpen={navOpen}></Circle>
        <Hamburger
          onClick={() => {
            setNavOpen((oldNavOpen: boolean) => !oldNavOpen)
          }}
        >
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
        </Hamburger>
      </NavContainer>
    </>
  );
}