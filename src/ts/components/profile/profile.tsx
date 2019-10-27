import React, { useEffect } from 'react';
import { Timeline } from './Timeline';
import { AboutMe } from './AboutMe'

export const Profile: React.FC = () => {
  useEffect(() => {
    document.getElementById('aboutmeTitle').scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <>
        <AboutMe />
        <Timeline />
    </>
  )
}
