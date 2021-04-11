import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";

export default class Login extends Component {
  render() {
    //checkLogin() onClick
    //if username = [username array] go to "/feed"
    //else modal
    return (
      <div className="form-wrapper">
        <h1>Login</h1>
        <form className="special" onSubmit={this.createUser}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleUsername}
            // defaultValue={this.state.username}
          />
          <label>Password:</label>
          <input
            type="text"
            name="password"
            onChange={this.handlePassword}
            // defaultValue={this.state.username}
          />
        </form>
        <button type="submit">Login</button>
      </div>
    );
  }
}
