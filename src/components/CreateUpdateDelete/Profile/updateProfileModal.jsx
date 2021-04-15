import React, { Component } from "react";
import CreateProfile from "./CreateProfile";

var modalStyle = {
  position: "absolute",
  top: "0",
  left: "0%",
  // backgroundColor: "rgba(0,0,0,0.9)",
  width: "100vw",
  height: "100vh",
  color: "red",
};

class updateProfileModal extends Component {
  render() {
    if (this.props.createModal === false) {
      // if we return null from a render method React will ignore ther component
      return null;
      //   <div className="my-modal" style={modalStyle}>
      //   <h2>Modal Window</h2>

      //   <div>{this.props.children}</div>
      // </div>
    } else
      return (
        <div className="my-modal" style={modalStyle}>
          <h2>Modal Window</h2>
          <button onClick={this.props.onClose}>Close</button>
        </div>
      );
  }
}
export default updateProfileModal;
