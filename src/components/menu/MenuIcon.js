import React, { Component } from 'react'
import menulogo from '../../assets/eye.png'

export default class MenuIcon extends Component {

    render(props) {
        return (
            <img onClick={this.props.toggleMenu} src={menulogo} alt=" " className="menu-logo" />
        )
    }
}
