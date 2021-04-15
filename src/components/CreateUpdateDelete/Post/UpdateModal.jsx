import React, { Component } from "react";
import UpdatePost from "./UpdatePost";

export default class UpdateModal extends Component {
  render() {
    return (
      <div className="form-wrapper">
        <h1>Delete Post:</h1>
        <UpdatePost />
      </div>
    );
  }
}
