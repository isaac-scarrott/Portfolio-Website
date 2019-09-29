//TODO: Add a loading number or get rid of loading screen

import React, { useEffect } from 'react'

import { setupFadeIn } from '../animations/InitalAnimations';

export function Loading({handlePageLoaded}) {

  // When page mounts animations will go in on after another (TODO: research better way of doing this)
  useEffect(() => {
    document.getElementById('loadingBar').style.width = '90%'
    setTimeout(() => {
      document.getElementById('loadingScreen').classList.add('hidden');
    }, 1000);
    setTimeout(() => {
      handlePageLoaded();
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
