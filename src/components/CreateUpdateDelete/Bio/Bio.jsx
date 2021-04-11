//**BIO**
import React, { Component } from "react";
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import User from "../Bio/User";

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userbio: {
        username: "",
        about: "",
        city: "",
        country: "",
      },
      // console.log(this.props.location.state.username),
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/api/buildings/${this.state.username}`)
      .then((res) => {
        console.log(this.state.username);
        console.log(res.data);
        this.setState({ userbio: res.data });
      });
  }

  // shipID = (evt) => {
  //   console.log(this.props.location.state.id);
  //   this.setState({ id: this.props.location.state.id });
  // };

  render() {
    console.table(this.state.userbio);
    console.log(this.state.username);

    return (
      <div>
        {/* {item.first_name}
            {item.last_name} */}
        <User
          username={this.state.userbio.username}
          about={this.state.userbio.about}
          city={this.state.userbio.city}
          country={this.state.userbio.country}
        />
      </div>
    );
  }
}
export default Bio;
