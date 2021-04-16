import React, { Component } from "react";
import DeletePost from "./DeletePost";

export default class DeleteModal extends Component {

  render() {
    return (
      <div className="form-wrapper">
        <h1>Delete Post:</h1>
        <DeletePost />
      </div>
    );
  }
}
