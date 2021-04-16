import React, { Component } from 'react'
import SlideShow from "./Slideshow"
import DateIcon from "./DateIcon"
import Logo from "../Logo"
import SmileIcon from "../SmileIcon"
import Heading3 from "./Heading3"
import Heading2 from "./Heading2"
import Heading1 from "./Heading1"
import Menu from '../menu/Menu'

export default class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <SlideShow />
                <DateIcon />
                <Logo classname="logo-top" />
                <SmileIcon classname="landing-smile-icon" />
                <Heading3 />
                <Heading2 />
                <Heading1 />
                <Logo classname="logo-bottom" />
                <Menu />
            </div>
        )
    }
}
