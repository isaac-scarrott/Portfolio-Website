import React, { useState, useEffect } from 'react';
import {
  NavContainer,
  Circle,
  Hamburger,
  HamburgerSpan,
  NavLink,
  NavLinksContainer
} from "./Styles";

export default function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : 'visible';
  }, [navOpen]);

  const render = () => { return navOpen ?
      (<NavLinksContainer>
        <NavLink navOpen key='home'>Home</NavLink>
        <NavLink navOpen key='skills'>Skills</NavLink>
        <NavLink navOpen key='blog'>Blog</NavLink>
      </NavLinksContainer>) :
      null;
  }

  return (
    <>
      <NavContainer>
        {render()}

        <Circle navOpen={navOpen}></Circle>
        <Hamburger
          onClick={() => {
            setNavOpen((oldNavOpen: boolean) => !oldNavOpen);
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