import React, { Component } from 'react'
import screenicon from '../../assets/icon.png'

export default class MenuScreenSaver extends Component {
    render() {
        return (
            <button className={this.props.classname}>
                <div><img src={screenicon} alt=" " className="icon" /></div>
            </button>
        )
    }
}
