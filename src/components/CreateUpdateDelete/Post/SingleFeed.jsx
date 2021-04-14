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

  deletePost = (e) => {

    var createURL = "";
    console.log("spot>>>>>>>>>>", this.state.title)
    console.log("spot>>>>>>>>>>", typeof(this.state.title))

    if (this.state.type_id === "1") {
      createURL = "buildings"
      console.log("build")
    } else if (this.state.type_id === "2") {
      createURL = "streets"
      console.log("street")
    } else if (this.state.type_id === "3") {
      createURL = "surroundings"
      console.log("surround")
    }
    console.log("deleting ", this.props.title);

    Axios
      .delete(`http://localhost:4000/api/${createURL}${this.state.title}`)
      .then((res) => {
        if (res.data.deletedCount >= 1) {
          console.log(">>>> successful deletion");
          this.props.refreshFeed();
        } else {
          console.log(">>>> nothing deleted");
        }
      });
    console.log("could I run the refresh in here?");
  };

  //NEED TO ADD 2xMODALS (one for Emma's delete and another one for the Update Page)
  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h1>Hello Single</h1>
          <h2>{this.props.username}</h2>
          <h2>{this.props.title}</h2>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}
export default SingleCard;

