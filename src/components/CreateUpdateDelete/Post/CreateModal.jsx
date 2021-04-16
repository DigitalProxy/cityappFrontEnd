import React, { Component } from "react";
import CreatePost from "./CreatePost";

export default class CreateModal extends Component {
  //   onClose = (e) => {
  //   console.log("123");
  //   // this.props.showmodal = false;
  //   this.setState({ showmodal: false });
  //   action={this.refreshCollection}  // };

  render() {
    return (
      <div className="form-wrapper">
        <h1>Create Post:</h1>
        <CreatePost />
      </div>
    );
  }
}
