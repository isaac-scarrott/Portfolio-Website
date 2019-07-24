// TODO: shrink by function ot save code maybe?

import React, { createContext, Fragment, useEffect, useState, useContext } from 'react'
import ReactDOM from 'react-dom'

const pages = createContext('home')

function Index() {
    const [currentPage, setcurrentPage] = useState('home')

    return (
        <Fragment>
            <IsaacScarrottTitle
                currentPage={currentPage}
            />
            <pages.Provider value={[currentPage, setcurrentPage]}>
                <NavBar />
            </pages.Provider>
            <SocialBar />
        </Fragment>
    )
}

function IsaacScarrottTitle(props) {
    useEffect(() => {
        if (props.currentPage !== 'home') {
            document.getElementById('isaacScarrottTitle').style.cssText = 'font-size: 1vw; padding-top: 1%; letter-spacing: 0.08vw;'
            document.getElementById('navBar').style.cssText = 'font-size: 1.7vw; padding-top: 1%;'
        }
    })

    return (
        <div id='isaacScarrottTitle'>Isaac Scarrott</div>
    )
}

function NavBar() {
    const [currentPage, setcurrentPage] = useContext(pages);

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

function SocialBar() {
    return (
        <nav id='socialBar'>
            <SocialBarButton
                iconClassName='fab fa-linkedin'
                link='https://www.linkedin.com/in/isaac-scarrott/'
            />
            <SocialBarButton
                iconClassName='fab fa-github'
                link='https://github.com/isaac-scarrott'
            />
            <SocialBarButton
                iconClassName='fas fa-address-book'
                link='http://isaacscarrott.co.uk/Isaac%20Scarrott%20CV.pdf'
            />
        </nav>
    )
}

function SocialBarButton(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" className={props.iconClassName}></a>
    )
}

ReactDOM.render(<Index />, document.getElementById('app-root'));