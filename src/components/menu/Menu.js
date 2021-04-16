import React, { Component } from 'react'
import { Link } from "@reach/router";
import MenuIcon from './MenuIcon'
import MenuSettingsIcon from './MenuSettingsIcon'
import MenuProfileIcon from './MenuProfileIcon'
import MenuAddIcon from './MenuAddIcon'
import MenuLogIn from './MenuLogIn'
import MenuScreenSaverIcon from './MenuScreenSaverIcon'
import MenuHomeIcon from './MenuHomeIcon'

export default class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            isMenuActive: false
        }
    }

    toggleMenu = () => {
        this.setState({
            isMenuActive: !this.state.isMenuActive
        })
    }

    render() {

        return (
            <div className="menu" >
                <MenuHomeIcon  classname={this.state.isMenuActive ? "menu-circle menu-home home-icon-animate" : "menu-circle menu-home home-icon-animate-down"} />
                <Link to="/screensaver">
                <MenuScreenSaverIcon classname={this.state.isMenuActive ? "menu-circle menu-screensaver screen-icon-animate" : "menu-circle menu-screensaver screen-icon-animate-down"} />
                </Link>
                <MenuLogIn classname="menu-log-in" />
                <Link to="/feed/add">
                <MenuAddIcon classname={this.state.isMenuActive ? "menu-circle add-icon add-icon-animate" : "menu-circle add-icon add-icon-animate-down"} />
                </Link>
                <Link to="/profile">
                <MenuProfileIcon classname={this.state.isMenuActive ? "menu-circle profile-icon profile-icon-animate" : "menu-circle profile-icon profile-icon-animate-down"} />
                </Link>
                <MenuSettingsIcon classname={this.state.isMenuActive ? "menu-circle settings-icon settings-icon-animate" : "menu-circle settings-icon settings-icon-animate-down"} />
                <MenuIcon toggleMenu={this.toggleMenu} />
            </div>
        )
    }
}
