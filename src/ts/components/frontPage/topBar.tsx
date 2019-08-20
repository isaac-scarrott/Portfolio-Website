import React, { useEffect, useRef, useContext } from 'react'

import { partiallyExpandedCircle, removeCircle, fullyExpandedCircle } from '../../animations/hamburgerCircle';

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
  }, [props.navOpen])

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
          onClick={props.handleNavToggle}
        ></i>
      </div>
    </div>
  )
}