// TODO: shrink by function ot save code maybe?

import React, { Component, PureComponent, Fragment, useEffect } from 'react'
import ReactDOM from 'react-dom'

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home'
        }
    }

    render() {
        return (
            <Fragment>
                <IsaacScarrottTitle
                    currentPage={this.state.currentPage}
                />
                <NavBar />
                <SocialBar />
            </Fragment>
        )
    }
}

function IsaacScarrottTitle(props) {
    useEffect(() => {
        if (props.currentPage !== 'home') document.getElementById('isaacScarrottTitle').style.fontSize = '1vw';
    })

    return (
        <div id='isaacScarrottTitle'>Isaac Scarrott</div>
    )
}

function NavBar(props) {
    // useEffect(() => {
    //     if (props.currentPage !== 'home') document.getElementById('navbar').style.fontSize = '4vw';
    // })

    return (
        <nav id='navBar'>
            <NavBarButton
                text='Projects'
            />
            <div id='navBreaker'> | </div>
            <NavBarButton
                text='Blog'
            />
            <div id='navBreaker'> | </div>
            <NavBarButton
                text='About Me'
            />
        </nav>
    )
}

function NavBarButton(props) {
    return (
        <a>{props.text}</a>
    )
}

function SocialBar() {
    return (
        <nav id='socialBar'>
            <SocialBarButton 
            iconClassName = 'fab fa-linkedin'
            link = 'https://www.linkedin.com/in/isaac-scarrott/'
            />
            <SocialBarButton 
            iconClassName = 'fab fa-github'
            link = 'https://github.com/isaac-scarrott'
            />
            <SocialBarButton 
            iconClassName = 'fas fa-address-book'
            link = 'http://isaacscarrott.co.uk/Isaac%20Scarrott%20CV.pdf'
            />
        </nav>
    )
}

function SocialBarButton(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer" class={props.iconClassName}></a>
    )
}

ReactDOM.render(<Index />, document.getElementById('app-root'));