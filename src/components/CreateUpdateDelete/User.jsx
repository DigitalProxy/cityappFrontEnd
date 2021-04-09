import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";

//single card
class User extends Component {
  shipID = (evt) => {
    console.log(this.props.id);
    this.setState({ id: this.props.id });
  };

  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h4>User</h4>
          {/* <UserButton/> */}
          <h2>{this.props.title}</h2>
          <h2>{this.props.name}</h2>
          <Link
            onClick={this.shipID}
            state={{ id: this.props.id }}
            to="/artistsbio"
          >
            <h4>Select User</h4>
          </Link>
          <br />
        </div>
      </div>
    );
  }
}
export default User;
