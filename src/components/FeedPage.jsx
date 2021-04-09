import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import FeedCard from "./FeedCard";
// import FloatingMenu from "./FloatingMenu";

export default class FeedPage extends Component {
  render() {
    return (
      <div className="feedBody">
        <h1>FEED</h1>
        <h1>BUILDINGS</h1>
        {/* <FloatingMenu /> */}
        <FeedCard />
      </div>
    );
  }
}
