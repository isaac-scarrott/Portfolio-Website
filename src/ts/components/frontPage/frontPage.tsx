import React from 'react'

import { FrontPageText } from './FrontPageText';

export function FrontPage({handleViewMore}) {
  return (
    <div id='frontPage'>
      <FrontPageText />
      
      <div id='unlockPageContainer' onClick={handleViewMore}>
        <div id='unlockPageText'>FIND OUT MORE</div>
        <i className="fas fa-chevron-down" id='unlockPageButton'></i>
      </div>
    </div>
  )
}
