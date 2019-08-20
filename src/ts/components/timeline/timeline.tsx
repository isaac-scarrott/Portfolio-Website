import React, { useEffect, useState, Fragment } from 'react';

import { timelineData } from '../../constants/constants'

export function Timeline() {
  useEffect(() => {
    document.getElementById('timeline').scrollIntoView({ behavior: 'smooth' });
  }, [])

  return (
    <div id='timeline'></div>
  )
}
