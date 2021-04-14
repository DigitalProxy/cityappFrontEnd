//**COLLECTION**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";

class ProfileCollection extends Component {
  refreshList = (e) => {
    axios.get(this.state.url).then((res) => {
      console.log(res.data);
      this.setState({ bss: res.data });
    });
  };

  shipID = (e) => {
    console.log(this.props._id);
    this.setState({ _id: this.props._id });
  };

  render() {
    return (
      <div key={this.props.key}>
        <Link
          onClick={this.shipID}
          state={{ _id: this.props._id }}
          to="/profile"
        ></Link>
        {/* style={imgTitleStyle} */}
        <h2>
          {this.props.username}
          {this.props.about}
          {this.props.city}
          {this.props.country}
          {this.props.instagram}
          {this.props.twitter}
          {this.props.fb}
          {this.props.website}
        </h2>
        {/* <img src={this.props.filepath} /> */}
      </div>
    );
  }
}
export default ProfileCollection;
