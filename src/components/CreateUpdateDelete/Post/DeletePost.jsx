import React, { Component } from "react";
import Axios from "axios";

export default class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: this.props.item._id,
      username: "",
      title: "",
      name: "",
      email: "",
      type_id: this.props.item.type_id,
      filepath: "",
      comment: "",
      showmodal: false,
      success: false,
    };
  }

  deletePost = (e) => {
    var createURL = "";
      window.location.reload(false);

    if (this.state.type_id === "1") {
      createURL = "buildings";
      console.log("build");
    } else if (this.state.type_id === "2") {
      createURL = "streets";
      console.log("street");
    } else if (this.state.type_id === "3") {
      createURL = "surroundings";
      console.log("surround");
    }
    console.log(`http://localhost:4000/api/${createURL}/${this.state._id}`);

    Axios.delete(
      `http://localhost:4000/api/${createURL}/${this.state._id}`
    ).then((res) => {
      if (res.data.deletedCount >= 1) {
        console.log(">>>> successful deletion");
        this.props.refreshFeed();
      } else {
        console.log(">>>> nothing deleted");
      }
    });
  };

  // refreshCollection = (e) => {
  //   axios.get(this.state.url).then((res) => {
  //     console.log(res.data);
  //     this.setState({ writers: res.data });
  //   });
  // };

  render() {
    return (
      <div>
        <h1>DELETE</h1>
        <button onClick={this.deletePost}>DELETE ME!</button>
        <div className="delete-form">
          <div className="delete-box">
            <h3>Are you sure you want to delete this post?</h3>
            <button className="cancel-button">Go Back</button>
            <button
              className="delete-button"
              onClick={this.deletePost}
              action={this.props.refreshCollection}
              
            > 
              Yes
            </button>
          </div>
        </div>

      </div>
    );
  }
}
