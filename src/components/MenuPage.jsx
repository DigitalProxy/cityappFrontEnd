import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";

class FloatingMenu extends Component {
  render() {
    return (
      <div>
        <h3>MENU (component)</h3>
        <Link to="/feed">FEED</Link>
        <br />
        <Link to="/profile">PROFILE</Link>
        <br />
        <Link to="/post">POST</Link>
        <br />
        <Link to="/login">LOGIN/LOGOUT</Link>
        <br />
        <Link to="/screensaver">SCREENSAVER</Link>
        <br />
        <Link to="/">HOME</Link>
      </div>
    );
  }
}
export default FloatingMenu;
