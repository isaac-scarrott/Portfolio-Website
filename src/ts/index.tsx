// TODO:    Shrink by function to save code maybe?
//          Get rid of provier

import React, { Fragment, useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import { partiallyExpandedCircle, removeCircle, fullyExpandedCircle } from './changes';


function Index() {
    const [navOpen, setNavOpen] = useState(false);

    function handleNavToggle() {
        setNavOpen(!navOpen);
    }


    return (
        <Fragment>
            <div id='frontPage'>
                <TopBar
                    navOpen={navOpen}
                    setNavOpen={handleNavToggle}
                />
                <ShortDesc />
            </div>

            {(navOpen) && <NavWindow />}
        </Fragment>
    )
}

function NavWindow() {
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

function TopBar(props) {
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        } else {
            (props.navOpen) ? fullyExpandedCircle() : partiallyExpandedCircle();
        }
    })

    return (
        <div id='topBar'>
            <div id='name'>
                <div>I S A A C</div>
                <div>S C A R R O T T</div>
            </div>
            <div id='hamburger'>
                <div id='circle'></div>
                <i
                    id='icon'
                    class="fas fa-bars"
                    onMouseEnter={partiallyExpandedCircle}
                    onMouseLeave={() => {
                        if (props.navOpen) {
                            fullyExpandedCircle();
                        } else {
                            removeCircle();
                        }
                    }}
                    onClick={props.setNavOpen}
                ></i>
            </div>
        </div>
    )
}

function ShortDesc() {
    return (
        <div id='shortDesc'>
            <div id='fsd'>
                <div>D E V E L O P E R</div>
            </div>

            <div id='ds'>
                <div>D A T A</div>
                <div>S C I E N C E</div>
            </div>
        </div>
    )
}



ReactDOM.render(<Index />, document.getElementById('app-root'));