//**REACT**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
//AXIOS DATA MANAGEMENT
import axios from "axios";
//APP PAGES
import MenuPage from "./MenuPage";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>LANDING PAGE</h1>
        <MenuPage />
      </div>
    );
  }
}
export default LandingPage;
