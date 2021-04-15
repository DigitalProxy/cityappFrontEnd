import React, { Component } from "react";
import CreateProfile from "../Profile/CreateProfile";

var modalStyle = {
  position: "absolute",
  top: "0",
  left: "0%",
  backgroundColor: "rgba(0,0,0,0.9)",
  width: "100vw",
  height: "100vh",
  color: "snow",
};

class Modal extends Component {
  render() {
    if (this.props.createModal === false) {
      return null;
    }

    return (
      <div className="my-modal" style={modalStyle}>
        <h2>Create Profile</h2>
        <CreateProfile />
        <button onClick={this.props.onClose}>Close</button>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
export default Modal;
