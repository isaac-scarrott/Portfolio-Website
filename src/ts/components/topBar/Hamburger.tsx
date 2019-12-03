import React, { useEffect, useRef } from 'react'

import { partiallyExpandedCircle, removeCircle, fullyExpandedCircle } from '../../animations/hamburgerCircle';

export function Hamburger({navOpen, handleNavToggle}) {
  const mounted: any = useRef();

  useEffect(() => {
    if (!mounted.current) {
      //TODO: Is this right? Find a better way to do this
      mounted.current = true;
    } else {
      (navOpen) ? fullyExpandedCircle() : partiallyExpandedCircle();
    }
  }, [navOpen])

  return (
    <div id='hamburger'>
      <div id='circle'></div>
      <div
        id="icon"
        onMouseEnter={partiallyExpandedCircle}
        onMouseLeave={() => {
          if (navOpen) {
            fullyExpandedCircle();
          } else {
            removeCircle();
          }
        }}
        onClick={handleNavToggle}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}