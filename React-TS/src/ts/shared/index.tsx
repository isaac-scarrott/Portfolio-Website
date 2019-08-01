// TODO:    Shrink by function to save code maybe?
//          Get rid of provier

import React, { createContext, Fragment, useEffect, useState, useContext } from 'react'
import ReactDOM from 'react-dom'

import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const pages = createContext('home')

function Index() {
    const [currentPage, setcurrentPage] = useState('home')
    return (
        <Fragment>
            <IsaacScarrottTitle
                currentPage={currentPage}
            />
            <pages.Provider value={setcurrentPage}>
                <NavBar />
            </pages.Provider>

            {(currentPage === 'projects') && <Projects />}

            {(currentPage === 'blog') && <Blogs />}

            {(currentPage === 'aboutme') && <AboutMe />}

            <SocialBar />
        </Fragment>
    )
}

function AwesomeFontButton(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className={`afb ${props.iconclassName}`}></a>
    )
}

/*---------------------------------------------------TITLE---------------------------------------------------*/

function IsaacScarrottTitle(props) {
    useEffect(() => {
        if (props.currentPage !== 'home') {
            document.getElementById('isaacScarrottTitle').style.cssText = 'font-size: 1.2vw; padding-top: 1%; letter-spacing: 0.08vw;'
            document.getElementById('navBar').style.cssText = 'font-size: 2vw; padding-top: 1%;'
        }
    })

    return (
        <div id='isaacScarrottTitle'>Isaac Scarrott</div>
    )
}

/*---------------------------------------------------NAVBAR---------------------------------------------------*/

function NavBar() {
    const setcurrentPage = useContext(pages);

    return (
        <nav id='navBar'>
            <a onClick={() => setcurrentPage('projects')}>Projects</a>
            <div id='navBreaker'> | </div>
            <a onClick={() => setcurrentPage('blog')}>Blog</a>
            <div id='navBreaker'> | </div>
            <a onClick={() => setcurrentPage('aboutme')}>About Me</a>
        </nav>
    )
}

/*---------------------------------------------------SOCIAL_BAR---------------------------------------------------*/

function SocialBar() {
    return (
        <nav id='socialBar'>
            <AwesomeFontButton
                iconclassName='fab fa-linkedin'
                link='https://www.linkedin.com/in/isaac-scarrott/'
            />
            <AwesomeFontButton
                iconclassName='fab fa-github'
                link='https://github.com/isaac-scarrott'
            />
            <AwesomeFontButton
                iconclassName='fas fa-address-book'
                link='http://isaacscarrott.co.uk/Isaac%20Scarrott%20CV.pdf'
            />
        </nav>
    )
}

/*---------------------------------------------------PROJECTS---------------------------------------------------*/

function Projects(props) {
    return (
        <Fragment>
            <Project />
            <hr className='projectBreaker' />
            <Project />
            <hr className='projectBreaker' />
            <Project />
            <hr className='projectBreaker' />
            <Project />
            <hr className='projectBreaker' />
            <Project />
        </Fragment>
    )
}

function Project(props) {
    return (
        <div className='project'>
            <div className='textAndButtons'>
                <div className='text'>
                    <div className='title'>Deep Learning To Analyse The Sentiment Of Tweets</div>
                    <div className='body'>
                        Final Year University Project where I compared a multi layer perceptron,
                        convolutional neural network and a recurrent neural network's performance at performing sentiment analysis on
                        tweets. This model was then implemented into a basic web application where the user can analsye the sentiment
                        of trends on twitter
                    </div>
                </div>
                <div className='buttons'>
                    <AwesomeFontButton
                        iconclassName='fas fa-desktop'
                        link='http://isaacscarrott.co.uk/Isaac%20Scarrott%20CV.pdf'
                    />
                    <AwesomeFontButton
                        iconclassName='fab fa-github-square'
                        link='http://isaacscarrott.co.uk/Isaac%20Scarrott%20CV.pdf'
                    />
                </div>
            </div>
            <div className='skills'>
                <div>skill 1</div>
                <div>skill 2</div>
                <div>skill 3</div>
                <div>skill 4</div>
                <div>skill 5</div>
            </div>
        </div>

    )
}

/*---------------------------------------------------PROJECTS---------------------------------------------------*/

function Blogs(props) {
    return (
        <Fragment>
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </Fragment>
    )
}

function Blog(props) {
    return (
        <div className='blog'>
            <div className='title'>First post & building the website</div>
            <div className='date'>02/06/2019</div>
            <hr className='blogBreaker'></hr>
            <div className='body'>  This is my first blog post and I don't really know what I'm doing but maybe I'll get better at these as I go on. These will describe my thought process and hopefully will help me to reflect on projects better.
                                    <br /><br />
                Anyway onto the website. I made this website to showcase my projects (although there are not many at the moment), to create this blog and maybe some other things. The idea behind it was to create as simple as possible website that will allow people who visit it to be able to navigate it as quickly as possible and there to be no extra infomation than is needed. The only issue that I see with this website is the fact the link the my CV is a addres book looking icon. This was used as awesome fonts don't have an icon suitable for a CV however I will be looking to change this very soon. I also might get my parents (average tech savvy) and my brother (more tech savvy than my parents) to have a look at it and test the user interface to give me some feedback. I am also looking to complete the about me page tomorrow so the basic website will be completed and can post it to Linkedin etc.
                                    <br /><br />
                Anyway, my writing skills clearly need to improve and hopefully that is something that will be seen looking back on this post in time to come.</div>
        </div>
    )
}

/*---------------------------------------------------ABOUT-ME---------------------------------------------------*/

function AboutMe(props) {
    return (
        <div id='aboutMe'>
            <div id='tabBar'>
                <Link  activeClass="active" className="test1" to="profile1" spy={true} smooth={true} duration={600} containerId="container" isDynamic={true} offset={-200}> Profile</Link>
                <Link  activeClass="active" className="test1" to="profile2" spy={true} smooth={true} duration={500} containerId="container" isDynamic={true}> Experience & Education</Link>
                <Link  activeClass="active" className="test1" to="skills" spy={true} smooth={true} duration={500} containerId="container" isDynamic={true}> Skills</Link>
                <Link  activeClass="active" className="test1" to="test1" spy={true} smooth={true} duration={500} containerId="container" isDynamic={true}> Awards & Certificates</Link>
            </div>

            <div id='container'>
                <Element name="profile1" class='profile'>
                    <Profile />
                </Element>
                <Element name="profile2" class='profile'>
                    <Profile />
                </Element>
                <Element name="skills" class='skills'>
                    <Skills />
                </Element>
            </div>




        </div>
    )
}

function Profile(props) {
    return (
        <Fragment>
        <img src="img/profileBW.jpg" alt="Isaac Scarrott" id="image" title="" ></img>
        <div id='body'>
            <div id='nameAge'>Isaac Scarrott, 20</div>
            <div id='bio'>University of Lincoln Computer Science graduate currently working as a junior software engineer for Bytron Aviation Systems. Keen software engineer and aspiring data scientist.</div>
        </div>
        </Fragment>
    )
}

function Skills(props) {
    return (
        <Fragment>
            <div id='languages'>
                <div className='title'>Languages</div>
            </div>
            <div id='technologies'>
                <div className='title'>Technologies</div>
            </div>
            <div id='otherSkills'>
                <div className='title'>Other Skills</div>
            </div>
        </Fragment>
    )
}

ReactDOM.render(<Index />, document.getElementById('app-root'));