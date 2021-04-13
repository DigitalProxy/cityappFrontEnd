import React, { Component } from 'react'
import { Redirect, Link, Router } from '@reach/router'
import LoginPage from "../LoginPage"

<Router path="/login" component={LoginPage}/>

export default class MenuLogIn extends Component {
    

    Login = (evt) => {
        console.log("login clicked")
        
    }

    

    render() {
        return (

                
            <Link to="/login" classname={this.props.classname}>
                <button className={this.props.classname}>Log In</button>
            </Link>
            

            
            // <button onclick={this.Login} className={this.props.classname}>Log In</button>
        )
    }
}