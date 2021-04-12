import React, { Component } from "react";
import Axios from "axios";
import PostForm from "./PostForm";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    //are we missing an id field in the handles?
    this.state = {
      id: "",
      username: "",
      title: "",
      name: "",
      email: "",
      type_id: "",
      filepath: "",
      comment: "",
      showmodal: false,
      success: false,
    };
  }

  //put new post into DB
  //somehow need to use the type_id from the from form input into the put command (use variable?)
  createPost = (e) => {
    e.preventDefault();

    if (this.state.type_id === 1) {
      Axios.post("http://localhost:4000/api/buildings", this.state).then(
        (res) => {
          console.log(res);
          if (res.statusText === "OK") {
            alert("Success - this needs a pretty modal");
          } else {
            alert("Fail - this needs a pretty modal");
          }
        }
      );
    } else if (this.state.type_id === 2) {
      Axios.post("http://localhost:4000/api/streets", this.state).then(
        (res) => {
          console.log(res);
          if (res.statusText === "OK") {
            alert("Success - this needs a pretty modal");
          } else {
            alert("Fail - this needs a pretty modal");
          }
        }
      );
    } else if (this.state.type_id === 3) {
      Axios.post("http://localhost:4000/api/surroundings", this.state).then(
        (res) => {
          console.log(res);
          if (res.statusText === "OK") {
            alert("Success - this needs a pretty modal");
          } else {
            alert("Fail - this needs a pretty modal");
          }
        }
      );
    }
  };

  //   Axios.post("http://localhost:4000/api/", this.state).then((res) => {
  //     console.log(res);
  //     if (res.statusText === "OK") {
  //       alert("Success - this needs a pretty modal");
  //     } else {
  //       alert("Fail - this needs a pretty modal");
  //     }
  //   });
  // };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleTypeID = (e) => {
    this.setState({ type_id: e.target.value });
  };

  handleFilePath = (e) => {
    this.setState({ filepath: e.target.value });
  };

  handleComment = (e) => {
    this.setState({ filepath: e.target.value });
  };

  onClose = (e) => {
    console.log("123");
    // this.props.showmodal = false;
    this.setState({ showmodal: false });
  };

  render() {
    return (
      <div className="form-wrapper">
        <h1>Create Post:</h1>
        <PostForm />
        <button type="submit">Create post</button>
        {/* <Modal showmodal={this.state.showmodal} onClose={this.onClose}>
          <h1>New Post</h1>
          <h1>Complete</h1>
          <p>
            {this.state.username} {this.state.title} has been added.
          </p>
        </Modal> */}
      </div>
    );
  }
}
