import React, { Component } from 'react'
import homeicon from '../../assets/home.png'

export default class MenuHomeIcon extends Component {
    render() {
        return (
            <button className={this.props.classname}>
                <div><img src={homeicon} alt=" " className="icon" /></div>
            </button>
        )
    }
}
