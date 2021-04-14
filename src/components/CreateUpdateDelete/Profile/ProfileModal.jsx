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

class ProfileModal extends Component {
  render() {
    if (this.props.createModal === false) {
      // if we return null from a render method React will ignore ther component
      return null;
      //   <div className="my-modal" style={modalStyle}>
      //   <h2>Modal Window</h2>
      //   <button onClick={this.props.onClose}>Close</button>
      //   <div>{this.props.children}</div>
      // </div>
    } else
      return (
        <div className="my-modal" style={modalStyle}>
          <h2>Modal Window</h2>
          <CreateProfile />
        </div>
      );
  }
}
export default ProfileModal;
