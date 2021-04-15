import React, { Component } from "react";

export default class DeletePostForm extends Component {
  render() {
    return (
      <div className="delete-form">
        <div className="delete-box">
          <h3>Are you sure you want to delete this post?</h3>
          <button className="delete-button">Yes</button>
          <button className="cancel-button">Go Back</button>
        </div>
      </div>
    );
  }
}
