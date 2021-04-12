import React, { Component } from 'react'
import settingsicon from '../../assets/settingsicon.png'
import MenuSettings from '../menu/MenuSettings'
import MenuLogIn from '../menu/MenuLogIn'

export default class MenuCircle extends Component {
    constructor(props){
        super(props)
        this.state = ({
            isSettingsActive: false
        })
    }

    toggleSettings = () => {
        this.setState({
            isSettingsActive: !this.state.isSettingsActive
        }, console.log('settings'))
    }

    render() {
        return (
            <>
            <button onClick={this.toggleSettings} className={this.props.classname}>
                <div><img src={settingsicon} alt=" " className="small-icon" /></div>
            </button>
            <MenuLogIn classname={this.state.isSettingsActive ? "menu-log-in menu-log-in-animate" : "menu-log-in menu-log-in-back"} />
            <MenuSettings classname={this.state.isSettingsActive ? "menu-settings menu-settings-animate" : "menu-settings menu-settings-back"} />
            </>
        )
    }
}
