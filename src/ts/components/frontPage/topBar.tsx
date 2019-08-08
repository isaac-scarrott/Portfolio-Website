import React, { useEffect, useRef } from 'react'

import { partiallyExpandedCircle, removeCircle, fullyExpandedCircle } from '../../animations/hamburgerCircle';
import { reset, setupFadeIn } from '../../animations/name'

const forenameArray = ['I', 'S', 'A', 'A', 'C']
const surenameArray = ['S', 'C', 'A', 'R', 'R', 'O', 'T', 'T']

const forename = forenameArray.map((letter) =>
  <span>{`${letter} `}</span>
)

const surename = surenameArray.map((letter) =>
  <span>{`${letter} `}</span>
)

function Name() {
  return (
    <div id='name' >
      <div id='forename'>
        {forename}
      </div>
      <div id='surname'>
        {surename}
      </div>
    </div>
  )
}

export function TopBar(props) {
  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      (props.navOpen) ? fullyExpandedCircle() : partiallyExpandedCircle();
    }
  })

  return (
    <div id='topBar'>
      <Name />
      <div id='hamburger'>
        <div id='circle'></div>
        <i
          id='icon'
          className="fas fa-bars"
          onMouseEnter={partiallyExpandedCircle}
          onMouseLeave={() => {
            if (props.navOpen) {
              fullyExpandedCircle();
            } else {
              removeCircle();
            }
          }}
          onClick={props.setNavOpen}
        ></i>
      </div>
    </div>
  )
}