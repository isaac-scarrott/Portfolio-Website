import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdSchool } from 'react-icons/md';
import { FaHamburger, FaCode } from 'react-icons/fa';

export function Timeline() {
  return (
    <>
      <div id='timelineTitle'>Timeline</div>
      <VerticalTimeline>
        <VerticalTimelineElement
          contentStyle={{ background: '#14141c', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #00ebac' }}
          date="June 2019 - Present"
          iconStyle={{ background: '#00ebac', color: 'white' }}
          icon={<FaCode />}
        >
          <h3 className="vertical-timeline-element-title">Junior Software Developer</h3>
          <p className='vertical-timeline-element-body'>
            Joined the Bytron developer team straight out of university.
          <br></br><br></br>
            Developer stack includes; Javascript (ES6+), React, Kendo UI, Apache Cordova, PHP (7.2), Symfony (3) and Oracle.
          <br></br><br></br>
            Creating software primarily for Boeing and Jeppesen, however other customers include FlyDubai and AeroMexico.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#14141c', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #00ebac' }}
          date="September 2016 - May 2019"
          iconStyle={{ background: '#00ebac', color: 'white' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">University of Lincoln</h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Science - 1st Class Degree (with honours)</h4>
          <p className='vertical-timeline-element-body'>
            Relevant modules include; Final Year Project, Algorithms For Data Mining,Web Authoring, Software Engineering Methodologies, Database Systems, Object-Oriented Programming and Parallel Computing.
          <br></br><br></br>
            I was also a part of the University Futsal society which was one of the best performing societies at the university.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#14141c', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #00ebac' }}
          date="May 2015 - June 2019"
          iconStyle={{ background: '#00ebac', color: 'white' }}
          icon={<FaHamburger />}
        >
          <h3 className="vertical-timeline-element-title">Mcdonalds</h3>
          <p className='vertical-timeline-element-body'>
            Part time job worked alongside attending college and university. I was a fully experienced crew member that was involved in many record hourly, weekly, monthly and yearly sales for the stores during my time at McDonald’s.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#14141c', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #00ebac' }}
          date="September 2014 - June 2016"
          iconStyle={{ background: '#00ebac', color: 'white' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Franklin College</h3>
          <h4 className="vertical-timeline-element-subtitle">A Levels - Maths, Computing, Business</h4>
          <p className='vertical-timeline-element-body'>
            Studied at Franklin College to complete my A Levels. Achieved BBC in Maths, Computing and Business respectively. Also was part of the college football team.
        </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: '#14141c', color: 'white' }}
          contentArrowStyle={{ borderRight: '7px solid  #00ebac' }}
          date="September 2014 - June 2016"
          iconStyle={{ background: '#00ebac', color: 'white' }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Tollbar Academy</h3>
          <h4 className="vertical-timeline-element-subtitle">11 GCSE's (A*-C)</h4>
          <p className='vertical-timeline-element-body'>
            Studied at Tollbar Academy to complete my GCSE's. Standout GCSE's incude A in Maths and 2 A's in ICT. Also won the endevour award for my school in ICT.
        </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
