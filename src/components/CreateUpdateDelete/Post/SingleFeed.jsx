import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import Axios from "axios";

//single image card
class SingleCard extends Component {
  shipTitle = (evt) => {
    console.log(this.props.title);
    this.setState({ filepath: this.props.title });
  };

  shipUserName = (evt) => {
    console.log(this.props.username);
    this.setState({ filepath: this.props.username });
  };



  //NEED TO ADD 2xMODALS (one for Emma's delete and another one for the Update Page)
  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h1>Hello Single</h1>
          <h2>{this.props.username}</h2>
          <h2>{this.props.title}</h2>
          <button>Select</button>
        </div>
      </div>
    );
  }
}
export default SingleCard;

