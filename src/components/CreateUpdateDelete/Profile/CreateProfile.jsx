import React, { Component } from "react";
import Axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import Modal from "../Modal";

export default class CreateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: Date.now(),
      username: String,
      name: String,
      email: String,
      city: String,
      country: String,
      about: String,
      instagram: String,
      twitter: String,
      fb: String,
      website: String,
      showmodal: false,
    };
    console.log(this.state.id);
  }

  createUser = (event) => {
    console.log("new user- check MongoDB");
    this.setState({ showmodal: true });
    //Axios posts the Form date that have been logged in this.state by the user input
    Axios.post("http://localhost:4000/api/users", this.state).then((res) => {
      console.log(res);
    });

    event.preventDefault();
  };

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };
  handleName = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleCity = (e) => {
    this.setState({ country: e.target.value });
  };

  handleCountry = (e) => {
    this.setState({ country: e.target.value });
  };

  handleAbout = (e) => {
    this.setState({ about: e.target.value });
  };

  handleInstagram = (e) => {
    this.setState({ instagram: e.target.value });
  };

  handleTwitter = (e) => {
    this.setState({ twitter: e.target.value });
  };

  handleFB = (e) => {
    this.setState({ fb: e.target.value });
  };

  handleWebsite = (e) => {
    this.setState({ website: e.target.value });
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
      <div className="form-wrapper">
        <h1>Create Profile:</h1>
        <form className="special" onSubmit={this.createUser}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleUsername}
            // defaultValue={this.state.username}
          />
          <br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleName}

            // defaultValue={this.state.name}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleEmail}
            // defaultValue={this.state.email}
          />
          <br />
          <label>City:</label>
          <input
            type="text"
            name="city"
            onChange={this.handleCity}
            // defaultValue={this.state.country}
          />
          <br />
          <label>Country:</label>
          <input
            type="text"
            name="country"
            onChange={this.handleCountry}
            // defaultValue={this.state.country}
          />
          <br />
          <label>About:</label>
          <input
            type="text"
            name="about"
            onChange={this.handleAbout}
            // defaultValue={this.state.about}
          />
          <br />
          <label>Instagram:</label>
          <input
            type="text"
            name="instagram"
            onChange={this.handleInstagram}
            // defaultValue={this.state.instagram}
          />
          <br />
          <label>Twitter:</label>
          <input
            type="text"
            name="twitter"
            onChange={this.handleTwitter}
            // defaultValue={this.state.twitter}
          />
          <br />
          <label>Facebook:</label>
          <input
            type="text"
            name="fb"
            onChange={this.handleFB}
            // defaultValue={this.state.fb}
          />
          <br />
          <label>Website:</label>
          <input
            type="text"
            name="website"
            onChange={this.handleWebsite}
            // defaultValue={this.state.website}
          />
          <br />

          <button type="submit">Create Profile</button>
        </form>

        <Modal showmodal={this.state.showmodal} onClose={this.onClose}>
          <h1>Modal Window Info</h1>
          <h1>Success</h1>
          <p>{this.state.username} has been added.</p>
        </Modal>
      </div>
    );
  }
}
