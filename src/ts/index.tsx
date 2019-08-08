import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { TopBar } from './components/frontPage/topBar.tsx';
import { VideoText } from './components/frontPage/videoText.tsx';
import { NavWindow } from './components/navWindow.tsx';

import { setupFadeIn } from './animations/name';

function Index() {
    useEffect(() => {
        setupFadeIn();
    }, []);

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
                <VideoText />
            </div>

            {(navOpen) && <NavWindow />}
        </Fragment>
    )
}

ReactDOM.render(<Index />, document.getElementById('app-root'));