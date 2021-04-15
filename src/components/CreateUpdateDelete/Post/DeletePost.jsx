import React, { Component } from "react";
import Axios from "axios";

export default class DeleteModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
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

  deletePost = (e) => {
    var createURL = "";
    //should have name type_id "cateogory"
    console.log("spot>>>>TYPE_ID>>>>>>", this.state.type_id);
    console.log("spot>>ID>>>>>>>>>>", this.state._id);
    console.log("spot>>ID>>>>>>>>>>", typeof this.state._id);

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
    console.log("deleting ", this.props._id);

    Axios.delete(
      `http://localhost:4000/api/${createURL}${this.state._id}`
    ).then((res) => {
      if (res.data.deletedCount >= 1) {
        console.log(">>>> successful deletion");
        this.props.refreshFeed();
      } else {
        console.log(">>>> nothing deleted");
      }
    });
    console.log("could I run the refresh in here?");
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
        <div className="delete-form">
          <div className="delete-box">
            <h3>Are you sure you want to delete this post?</h3>
            <button className="cancel-button">Go Back</button>
            <button
              className="delete-button"
              onClick={this.deletePost}
              //not sure where this sends the props to.  Back to Feed?
              action={this.props.refreshCollection}
            >
              Yes
            </button>
          </div>
        </div>

        {/* <Modal showmodal={this.state.showmodal} onClose={this.onClose}>
      <h1>New Post</h1>
      <h1>Complete</h1>
      <p>
        {this.state.username} {this.state.title} has been added.
      </p>
      </Modal> */}
      </div>
    );
  }
}
