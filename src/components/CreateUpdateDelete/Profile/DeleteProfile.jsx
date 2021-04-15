import React, { Component } from "react";
import Axios from "axios";
// import { Router, Link, navigate } from "@reach/router";
// import Modal from "../Modal";

export default class DeleteProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
      username: "",
      name: "",
      email: "",
      city: "",
      country: "",
      about: "",
      instagram: "",
      twitter: "",
      fb: "",
      website: "",
    };
    console.log(this.state.id);
  }

  // componentDidMount() {
  //   Axios.get(`http://localhost:4000/api/users/${this.state.username}`).then(
  //     (res) => {
  //       console.log(this.state.id);
  //       console.table(res.data);
  //       this.setState({
  //         _id: res.data._id,
  //         username: res.data.username,
  //         name: res.data.name,
  //         email: res.data.name,
  //         country: res.data.email,
  //         about: res.data.about,
  //         instagram: res.data.instagram,
  //         twitter: res.data.twitter,
  //         fb: res.data.fb,
  //         website: res.data.website,
  //       });
  //     }
  //   );
  // }

  //username: this.props.location.state.username,
  deleteProfile = (e) => {
    console.log("deleting ", this.props.username);
    Axios.delete(`http://localhost:4000/api/users/${this.state.username}`).then(
      (res) => {
        if (res.data.deletedCount >= 1) {
          console.log(">>>> successful deletion");
        } else {
          console.log(">>>> nothing deleted");
        }
      }
    );
    console.log("could I run the refresh in here?");
  };

  onClose = (e) => {
    console.log("123");
    // this.props.showmodal = false;
    this.setState({ showmodal: false });
  };

  render() {
    //is there a way to run a component for the form and then nest another component for the "defaultValue" that feeds a $var into for the different
    //form inputs?  Prob not.
    return (
      <div className="delete-form">
        <div className="delete-box">
          <h3>Are you sure you want to delete this profile?</h3>
          <button className="delete-button">Yes</button>
          <button className="cancel-button">Go Back</button>
        </div>
      </div>
    );
  }
}
