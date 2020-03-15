import React, { useState } from 'react';
import { NavContainer, Circle, Hamburger, HamburgerSpan } from "./Styles";


export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <Circle navOpen={navOpen}></Circle>
        <Hamburger
          onClick={() => setNavOpen((oldNavOpen: boolean) => !oldNavOpen)}
        >
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
        </Hamburger>
      </NavContainer>
    </>
  );
}