import React, { Component } from "react";
import Axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import Modal from "../Modal";

export default class UpdateProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: String,
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
    };
    console.log(this.state.id);
  }

  //this needs to be non-id call - it needs to populate the whole user DB and then add a new user object
  componentDidMount() {
    Axios.get(`http://localhost:4000/api/users/${this.state.id}`).then(
      (res) => {
        console.log(this.state.id);
        console.table(res.data);
        this.setState({
          _id: res.data._id,
          username: res.data.username,
          name: res.data.name,
          email: res.data.name,
          country: res.data.email,
          about: res.data.about,
          instagram: res.data.instagram,
          twitter: res.data.twitter,
          fb: res.data.fb,
          website: res.data.website,
        });
      }
    );
  }

  createUser = (e) => {
    e.preventDefault();

    Axios.put(
      `http://localhost:4000/api/users/${this.state.id}`,
      this.state
    ).then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        this.setState({ showmodal: true });
        //show a different modal if the input is invalid or null
      } else {
        this.setState({ showmodal2: true });
      }
    });
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
        <h1>Update Profile:</h1>

        <form className="special" onSubmit={this.createUser}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            onChange={this.handleUsername}
            defaultValue={this.state.username}
          />
          <br />
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={this.handleName}
            defaultValue={this.state.name}
          />
          <br />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            onChange={this.handleEmail}
            defaultValue={this.state.email}
          />
          <br />
          <label>Country:</label>
          <input
            type="text"
            name="country"
            onChange={this.handleCountry}
            defaultValue={this.state.country}
          />
          <br />
          <label>About:</label>
          <input
            type="text"
            name="about"
            onChange={this.handleAbout}
            defaultValue={this.state.about}
          />
          <br />
          <label>Instagram:</label>
          <input
            type="text"
            name="instagram"
            onChange={this.handleInstagram}
            defaultValue={this.state.instagram}
          />
          <br />
          <label>Twitter:</label>
          <input
            type="text"
            name="twitter"
            onChange={this.handleTwitter}
            defaultValue={this.state.twitter}
          />
          <br />
          <label>Facebook:</label>
          <input
            type="text"
            name="fb"
            onChange={this.handleFB}
            defaultValue={this.state.fb}
          />
          <br />
          <label>Website:</label>
          <input
            type="text"
            name="website"
            onChange={this.handleWebsite}
            defaultValue={this.state.website}
          />
          <br />
          <button type="submit">Update Profile</button>
        </form>

        <Modal showmodal={this.state.showmodal} onClose={this.onClose}>
          <h1>Modal Window Info</h1>
          <h1>Success</h1>
          <p>{this.state.username} has been updated.</p>
        </Modal>
      </div>
    );
  }
}
