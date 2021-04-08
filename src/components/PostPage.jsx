import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import MenuPage from "./MenuPage";

export default class PostPage extends Component {
  render() {
    return (
      <div>
        <h1>CREATE POST</h1>
        <MenuPage />
      </div>
    );
  }
}
