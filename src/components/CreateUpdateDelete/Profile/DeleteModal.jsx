import React, { Component } from "react";
import DeleteProfile from "./DeleteProfile";

class DeleteModal extends Component {
  render() {
    //   onClose = (e) => {
    //   console.log("123");
    //   // this.props.showmodal = false;
    //   this.setState({ showmodal: false });
    //   action={this.refreshCollection}  // };
    if (this.props.createModal === false) {
      return null;
    }

    return (
      <div className="form-wrapper">
        <h1>Delete Post:</h1>
        <DeleteProfile />
      </div>
    );
  }
}
export default DeleteModal;
