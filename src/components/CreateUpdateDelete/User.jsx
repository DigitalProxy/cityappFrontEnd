import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";

//single card
class Writers extends Component {
  shipID = (evt) => {
    console.log(this.props.id);
    this.setState({ id: this.props.id });
  };

  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h4>Writer</h4>
          {/* <UserButton/> */}
          <h2>{this.props.firstname}</h2>
          <h2>{this.props.lastname}</h2>
          <Link
            onClick={this.shipID}
            state={{ id: this.props.id }}
            to="/writersbio"
          >
            <h4>Select Writer</h4>
          </Link>
          <br />
        </div>
      </div>
    );
  }
}
export default Writers;
