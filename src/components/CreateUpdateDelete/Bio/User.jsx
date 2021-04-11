import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";

//single card
class User extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h2>User</h2>
          {/* <UserButton/> */}
          <h2>{this.props.username}</h2>
          <h2>{this.props.about}</h2>
          <h2>{this.props.city}</h2>
          <h2>{this.props.country}</h2>
          {/* <h2>{this.props.id}</h2> */}
          {/* <img src={"./images/" + this.props.filepath} alt="creator image" /> */}
        </div>
      </div>
    );
  }
}
export default User;
