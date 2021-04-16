import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import FeedCard from "./FeedCard";
import Menu from './menu/Menu'

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
