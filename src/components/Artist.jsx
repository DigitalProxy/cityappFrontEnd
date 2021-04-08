//**CREATOR**/
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";

//single card
class Artist extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h2>Creator</h2>
          {/* <UserButton/> */}
          <h2>{this.props.title}</h2>
          <h2>{this.props.name}</h2>
          <h2>{this.props.email}</h2>
          <h2>{this.props.type_id}</h2>
          <h2>{this.props.filepath}</h2>
          <h2>{this.props.id}</h2>
          {/* <img src={"./images/" + this.props.filepath} alt="creator image" /> */}
          {/* {this.props.filepath ? (
            <img src={"./images/" + this.props.filepath} alt="writer image" />
          ) : null} */}
        </div>
      </div>
    );
  }
}
export default Artist;
