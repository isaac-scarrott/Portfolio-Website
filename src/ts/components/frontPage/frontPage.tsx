import React from 'react'

import { TopBar } from './topBar';
import { VideoText } from './videoText';

export function FrontPage(props) {
  return (
    <div id='frontPage'>
      <TopBar
        navOpen={props.navOpen}
        handleNavToggle={props.handleNavToggle}
      />
      <VideoText />
      <div id='unlockPageContainer' onClick={props.handleViewMore}>
        <div id='unlockPageText'>FIND OUT MORE</div>
        <i className="fas fa-chevron-down" id='unlockPageButton'></i>
      </div>
    </div>
  )
}
