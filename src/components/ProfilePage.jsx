import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import MenuPage from "./MenuPage";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>CREATE/UPDATE PROFILE</h1>
        <MenuPage />
      </div>
    );
  }
}
