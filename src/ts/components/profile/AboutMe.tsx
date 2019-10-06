import React, {useState} from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const getAge = (birthDate: string): number => Math.floor((new Date() as any - new Date(birthDate).getTime() as any) / 3.15576e+10)

export const AboutMe: React.FC = () => {


  return (
    <>
      <div id='aboutmeTitle'>
        <Bounce left duration={1000}>About Me</Bounce>

      </div>

      <div id='aboutMeScroller'>
        <div id='aboutMeIntroduction'>
          <Fade duration={2000}><div>Hi,</div></Fade>
          <Fade duration={2000} delay={1500}><div>I'm Isaac, a {getAge('07-18-1998')} year old software developer living in the United Kingdom</div></Fade>
        </div>

        <div id='bitmoji'>

        </div>
      </div>

  </>
  )
}
