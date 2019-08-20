import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';

import { NavWindow } from './components/navWindow';
import { Loading } from './components/loading'
import { FrontPage } from './components/frontPage/frontPage'
import { Timeline } from './components/timeline/timeline'

function Index() {
    const [navOpen, setNavOpen] = useState(null);
    const [viewMore, setViewMore] = useState(false);

    function handlePageLoaded() {
        setNavOpen(false);
    }

    function handleNavToggle() {
        setNavOpen(!navOpen);
    }

    function handleViewMore() {
        setViewMore(true);
        document.getElementById('unlockPageContainer').style.opacity = '0';
    }

    return (
        <Fragment>
            {(navOpen === null) &&
                <Loading
                    handlePageLoaded={handlePageLoaded}
                />
            }
            {(navOpen !== null) &&
                <FrontPage
                    navOpen={navOpen}
                    handleNavToggle={handleNavToggle}
                    handleViewMore={handleViewMore}
                />
            }
            {(viewMore) &&
                <Timeline />
            }

            {(navOpen) && <NavWindow />}
        </Fragment>
    )
}

ReactDOM.render(<Index />, document.getElementById('app-root'));