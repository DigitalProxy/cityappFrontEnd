//**LOGIN**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import MenuPage from "./MenuPage";

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <h1>LOGIN/LOGOUT</h1>
        <MenuPage />
      </div>
    );
  }
}
