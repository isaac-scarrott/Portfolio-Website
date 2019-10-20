import React, {useState} from 'react';

import { DiReact, DiJavascript1, DiGit, DiLess, DiPython} from "react-icons/di";

import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom';


const getAge = (birthDate: string): number => Math.floor((new Date() as any - new Date(birthDate).getTime() as any) / 3.15576e+10)

export const AboutMe: React.FC = () => {


  return (
    <>
      <div id='aboutmeTitle'>
        <Bounce left duration={1000}>About Me</Bounce>

      </div>

      <div id='aboutMeScroller'>
        <div id='aboutMeIntroduction'>
          <Fade duration={3000}><div className='header'>Hi,</div></Fade>
          <Fade duration={3000} delay={1000}><div>I'm Isaac, a {getAge('07-18-1998')} year old software developer living in the United Kingdom</div></Fade>
        </div>

        <div id='aboutMeSkills'>
          <Flip top duration={3000}><div className='header'>Skills</div></Flip>
          <div id='skillsIconsContainer'>
            <Zoom bottom duration={3000}>
              <div id='react' className='skillItem'><DiReact color='#61DAFB' />React</div>
            </Zoom>
              <Zoom bottom duration={3000}>
              <div id='javascript' className='skillItem'><DiJavascript1 color='#FBD601' />Javascript</div>
            </Zoom>
            <Zoom bottom duration={3000}>
              <div id='git' className='skillItem'><DiGit color='#F05033'/>Git</div>
            </Zoom>
            <Zoom bottom duration={3000}>
              <div id='less' className='skillItem'><DiLess />Less</div>
            </Zoom>
            <Zoom bottom duration={3000}>
              <div id='python' className='skillItem'><DiPython color='#306998' />Python</div>
            </Zoom>
          </div>
        </div>
      </div>

  </>
  )
}
