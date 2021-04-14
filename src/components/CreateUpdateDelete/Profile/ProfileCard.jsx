//**CARD**
//**REACT**
import React, { Component } from "react";
//DATA MANAGEMENT
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
//COMPONENTS
import ProfileCollection from "../Profile/ProfileCollection";
import ProfileModal from "../Profile/ProfileModal";

class FeedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "http://localhost:4000/api/users",
      usersCollection: [],
      createModal: false,
      updateModal: false,
      deleteModal: false,
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      console.log("app>>>>>>>>");
      console.log(res.data);
      this.setState({ usersCollection: res.data });
      console.log(res.data);
      console.log("app<<<<<<<<");
    });
  }

  createModal = (event) => {
    console.log("new user- check MongoDB");
    this.setState({ createModal: true });
  };

  updateModal = (event) => {
    console.log("new user- check MongoDB");
    this.setState({ updateModal: true });
  };

  deleteModal = (event) => {
    console.log("new user- check MongoDB");
    this.setState({ deleteModal: true });
  };

  // shipProfile = (evt) => {
  //   console.log("hello filepath");
  //   console.log(this.props.id, this.props.filepath);
  //   this.setState({ id: this.props.id, filepath: this.props.filepath });
  // };

  render() {
    return (
      <div>
        {this.state.usersCollection.map((item, index) => {
          console.log(this.state.usersCollection);
          return (
            <div>
              <ProfileCollection
                key={index}
                _id={item._id}
                username={item.username}
                name={item.name}
                email={item.email}
                city={item.city}
                country={item.country}
                about={item.about}
                instagram={item.instagram}
                twitter={item.twitter}
                fb={item.fb}
                website={item.website}
              />
              <h1>PROFILE</h1>
            </div>
          );
        })}
        <button onClick={this.createModal}>Create Profile</button>
        <button onClick={this.updateModal}>Update Profile</button>
        <button ocClick={this.deleteModal}>Delete Profile</button>

        <ProfileModal
          createmodal={this.state.createmodal}
          onClose={this.onClose}
        >
          <h1>Modal Window Info</h1>
          <h1>Sucess</h1>
          <p>{this.state.username} profile has been added.</p>
        </ProfileModal>

        <ProfileModal
          updatemodal={this.state.updatemodal}
          onClose={this.onClose}
        >
          <h1>Modal Window Info</h1>
          <h1>Sucess</h1>
          <p>{this.state.username} profile has been updated.</p>
        </ProfileModal>

        <ProfileModal
          deletemodal={this.state.deletemodal}
          onClose={this.onClose}
        >
          <h1>Modal Window Info</h1>
          <h1>Sucess</h1>
          <p>{this.state.username} profile has been deleted.</p>
        </ProfileModal>
      </div>
    );
  }
}
export default FeedCard;