import React from 'react'
import Jump from 'react-reveal/Jump';

import { FrontPageText } from './FrontPageText';

export function FrontPage({handleViewMore}) {
  return (
    <div id='frontPage'>
      <FrontPageText />

      <Jump forever={true} delay={5000}>
        <div id='unlockPageContainer' onClick={handleViewMore}>
          <div id='unlockPageText'>FIND OUT MORE</div>
          <i className="fas fa-chevron-down" id='unlockPageButton'></i>
        </div>
      </Jump>
    </div>
  )
}
