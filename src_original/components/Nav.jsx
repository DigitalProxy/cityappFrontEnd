//**NAV**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";

class Nav extends Component {
  render() {
    return (
      <div>
        <ul>
          <h3>
            <Link to="/"></Link>
          </h3>
          <br />
          <h3>Hello Data</h3>
        </ul>
      </div>
    );
  }
}
export default Nav;
