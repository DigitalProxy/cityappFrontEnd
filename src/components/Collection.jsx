//**COLLECTION**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";

//single card
class Collection extends Component {
  shipID = (evt) => {
    console.log("hello id");
    console.log(this.props.id);
    this.setState({ id: this.props._id });
  };

  render() {
    return (
      <div key={this.props.key}>
        <div>
          {/* <UserButton/> */}
          <h2>title:{this.props.title}</h2>
          <h2>name:{this.props.name}</h2>
          <img src={this.props.filepath} />
          <Link onClick={this.shipID} state={{ id: this.props._id }} to="/bio">
            <h4>Artist Bio</h4>
          </Link>
        </div>
      </div>
    );
  }
}
export default Collection;
