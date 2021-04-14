import React, { Component } from 'react'
import { Router, Link, navigate } from "@reach/router";
import MenuIcon from './MenuIcon'
import MenuSettingsIcon from './MenuSettingsIcon'
import MenuProfileIcon from './MenuProfileIcon'
import MenuAddIcon from './MenuAddIcon'
import MenuLogIn from './MenuLogIn'

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
                <MenuLogIn classname="menu-log-in" />
                <Link to="/feed/add">
                <MenuAddIcon classname={this.state.isMenuActive ? "menu-circle add-icon add-icon-animate" : "menu-circle add-icon add-icon-animate-down"} />
                </Link>
                <MenuProfileIcon classname={this.state.isMenuActive ? "menu-circle profile-icon profile-icon-animate" : "menu-circle profile-icon profile-icon-animate-down"} />
                <MenuSettingsIcon classname={this.state.isMenuActive ? "menu-circle settings-icon settings-icon-animate" : "menu-circle settings-icon settings-icon-animate-down"} />
                <MenuIcon toggleMenu={this.toggleMenu} />
            </div>
        )
    }
}
