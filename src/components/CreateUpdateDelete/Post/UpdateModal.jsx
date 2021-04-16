import React, { Component } from "react";
import UpdatePost from "./UpdatePost";

export default class UpdateModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
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
  
  render() {
    console.log(this.state.id)
    return (
      <div className="form-wrapper">
        <h1>Delete Post:</h1>
        <UpdatePost />
      </div>
    );
  }
}
