import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import MenuPage from "./MenuPage";

export default class ScreenSaverPage extends Component {
  render() {
    return (
      <div>
        <h1>SCREENSAVER</h1>
        <MenuPage />
      </div>
    );
  }
}
