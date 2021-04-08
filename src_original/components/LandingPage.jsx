//**REACT**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
//AXIOS DATA MANAGEMENT
import axios from "axios";
//APP PAGES
import FloatingMenu from "./FloatingMenu";
import SlidingGallery from "./SlidingGallery";
import People from "./People";
import Places from "./Places";
import Plants from "./Plants";
import CHCH from "./CHCH";
import Logo from "./Logo";
import SVG from "./SVG";
import Titles from "./Titles";

class LandingPage extends Component {
  render() {
    return (
      <div>
        <h1>LANDING PAGE</h1>
        <SlidingGallery />
        <Logo />
        <SVG />
        <Titles />
        <FloatingMenu />
        <People />
        <Plants />
        <Places />
        <CHCH />
      </div>
    );
  }
}
export default LandingPage;
