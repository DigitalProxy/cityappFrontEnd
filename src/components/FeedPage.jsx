import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import FeedCard from "./FeedCard";
import Menu from './menu/Menu'
// import FloatingMenu from "./FloatingMenu";

export default class FeedPage extends Component {
  titleCallback(title){
    this.props.titleCallback(title)
  }
  
  render() {
    return (
      <div className="feedBody">
        <FeedCard titleCallback={this.titleCallback}/>
        <Menu />
      </div>
    );
  }
}
