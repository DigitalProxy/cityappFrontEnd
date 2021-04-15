import React, { Component } from "react";
import axios from "axios";
// import { Router, Link, navigate } from "@reach/router";
import ProfileCollection from "../Profile/ProfileCollection";
import CreateModal from "../Profile/CreateProfile";
import UpdateModal from "../Profile/UpdateModal";
import DeleteModal from "../Profile/DeleteModal";

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
      // console.log(res.data);
      this.setState({ usersCollection: res.data });
      // console.log(res.data);
      console.log("app<<<<<<<<");
    });
  }

  // handleSubmit = (event) => {
  //   console.log("new writer - check MongoDB");
  //   this.setState({ showmodal2: true });

  //   event.preventDefault();
  // };

  createModal = (event) => {
    console.log("toggle");
    this.setState({ createModal: true });
    console.log(this.state.createModal);
    event.preventDefault();
  };

  updateModal = (e) => {
    console.log("toggle");
    this.setState({ updateModal: true });
    console.log(this.state.deleteModal);
  };

  deleteModal = (e) => {
    console.log("toggle");
    this.setState({ deleteModal: true });
    console.log(this.state.deleteModal);
    // console.log("hello username");
    // console.log(this.props.id, this.props.username);
    // this.setState({ id: this.props.id, filepath: this.props.username });
  };

  //KEVIN: Can I nest this function in the delete modal?
  // shipUserName = (event) => {
  //   console.log("hello username");
  //   console.log(this.props.id, this.props.username);
  //   this.setState({ id: this.props.id, filepath: this.props.username });
  // };

  render() {
    return (
      <div>
        {this.state.usersCollection.map((item, index) => {
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

              <button onClick={this.createModal}>Create Modal</button>
              <button onClick={this.updateModal}>Update Profile</button>
              <button onClick={this.deleteModal}>Delete Profile</button>
            </div>
          );
        })}

        <CreateModal />
        <UpdateModal />
        <DeleteModal />

        {/* <updateProfileModal
        {this.state.updateModal ? true : false}>
          // updateModal={this.state.updateModal}
          onClose={this.onClose}
          <h1>Modal Window Info</h1>
          <h1>Successful Update</h1>
          <p>{this.state.username} profile has been updated.</p>
        </updateProfileModal>

        <deleteProfileModal
          // deleteModal={this.state.deleteModal}
          onClose={this.onClose}
        >
          <h1>Modal Window Info</h1>
          <h1>Successful Delete</h1>
          <p>{this.state.username} profile has been deleted.</p>
        </deleteProfileModal> */}
      </div>
    );
  }
}
export default FeedCard;
