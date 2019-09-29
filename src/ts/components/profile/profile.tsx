import React, { useEffect } from 'react';
import { Timeline } from './Timeline';
import { AboutMe } from './AboutMe'

export function Profile() {
  useEffect(() => {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <div id='profile'>
      <AboutMe />
      <Timeline />
    </div >
  )
}
