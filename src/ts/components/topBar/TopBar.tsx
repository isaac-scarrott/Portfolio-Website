import React from 'react'

import {Name} from './Name';
import {Hamburger} from './Hamburger'

export function TopBar({navOpen, handleNavToggle}) {
  return (
    <div id='topBar'>
      <Name />
      
      <Hamburger 
        navOpen={navOpen}
        handleNavToggle={handleNavToggle}
      />
    </div>
  )
}
