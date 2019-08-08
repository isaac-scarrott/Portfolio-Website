import React, { useState } from 'react'

export function NavWindow() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const toggleHover = (hoverState) => setHoveredLink(hoverState);

  return (
    < div id='navWindow' >
      <div>About Me</div>
      <div>Experience</div>
      <div>Projects</div>
      <div>Education</div>
      <div>Blog</div>
    </div >
  )
}