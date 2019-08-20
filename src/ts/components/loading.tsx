import React, { useEffect } from 'react'

import { setupFadeIn } from '../animations/initial';

export function Loading(props) {

  useEffect(() => {
    document.getElementById('loadingBar').style.width = '90%'
    setTimeout(() => {
      document.getElementById('loadingScreen').classList.add('hidden');
    }, 1000);
    setTimeout(() => {

      props.handlePageLoaded();
      setupFadeIn();
    }, 1500);
  }, []);

  return (
    <div>
      <div id='loadingScreen'>
        <div id='loadingContainer'><div id='loadingBar'></div></div>
        {/* <div id='loadingNumber'>100%</div> */}
      </div>
    </div>
  )
}
