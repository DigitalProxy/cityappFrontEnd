import React, { Component } from "react";
import UpdateProfile from "./UpdateProfile";

var modalStyle = {
  position: "absolute",
  top: "0",
  left: "0%",
  backgroundColor: "rgba(0,0,0,0.9)",
  width: "100vw",
  height: "100vh",
  color: "snow",
};

class UpdateModal extends Component {
  render() {
    if (this.props.createModal === false) {
      return null;
    }

    return (
      <div className="my-modal" style={modalStyle}>
        <UpdateProfile />
      </div>
    );
  }
}
export default UpdateModal;
