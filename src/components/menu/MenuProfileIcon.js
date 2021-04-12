import React, { Component } from 'react'
import profileicon from '../../assets/profileicon.png'

export default class MenuProfileIcon extends Component {
    render() {
        return (
            <button className={this.props.classname}>
                <div><img src={profileicon} alt=" " className="icon" /></div>
            </button>
        )
    }
}
