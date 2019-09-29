import React, { useEffect, useState, Fragment } from 'react';
import { Timeline } from '../Timeline';

export function Profile() {
  useEffect(() => {
    document.getElementById('profile').scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <div id='profile'>
      <Timeline />
    </div >
  )
}
