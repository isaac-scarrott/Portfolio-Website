// TODO: Tidy up if statements

import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { NavWindow } from './components/navWindow';
import { Loading } from './components/loading'
import { FrontPage } from './components/frontPage/frontPage'
import { Profile } from './components/Profile/Profile'
import { TopBar } from './components/topBar/TopBar';

import {setupFadeInName} from './animations/NameAnimation'


function Index() {
    const [navOpen, setNavOpen] = useState(false);
    const [viewMore, setViewMore] = useState(false);

    useEffect(() => {
        setupFadeInName();
    }, [])

    function handleNavToggle() {
        setNavOpen(!navOpen);
        document.getElementById('icon').classList.toggle('open');
    }

    function handleViewMore() {
        setViewMore(true);
        document.getElementById('unlockPageContainer').style.opacity = '0';
    }

    return (
        <>
            <TopBar
                navOpen={navOpen}
                handleNavToggle={handleNavToggle}
            />
            <FrontPage
                handleViewMore={handleViewMore}
            />

            {(viewMore) &&
                <Profile />
            }
            {(navOpen) && <NavWindow />}
        </>
    )
}

ReactDOM.render(<Index />, document.getElementById('app-root'));