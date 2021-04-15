import React, { Component } from "react";
// import { Router, Link, navigate } from "@reach/router";
// import Axios from "axios";

//single image card
class SingleCard extends Component {
  shipDetails = (evt) => {
    this.setState({ type_ID: this.props.type_id });
    this.setState({ _id: this.props._id });
    console.log(this.props.type_id);
    console.log(this.props._id);
  };

  //NEED TO ADD 3xMODALS (one for Emma's delete and another one for the Update Page)
  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h1>Hello Single</h1>
          <h2>{this.props.username}</h2>
          <h2>{this.props.title}</h2>
          <button>Create</button>
          <button>Update</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}
export default SingleCard;
