import React, { Component } from 'react'
import smileicon from '../assets/twins.png'

export default class SmileIcon extends Component {
    render() {
        return (
            <img src={smileicon} alt=" " className={this.props.classname} />
        )
    }
}
