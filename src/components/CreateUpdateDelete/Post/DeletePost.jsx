import React, { Component } from "react";
import Axios from "axios";
import PostForm from "./PostForm";

export default class DeletePost extends Component {
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

  //props need to get here from ship Filepath somehow.
  //assign filepath to create delete point
  // shipFilepath = (evt) => {
  //   console.log(this.props.filepath);
  //   this.setState({ id: this.props.filepath });
  // };

  deletePost = (e) => {
    console.log("deleting ", this.props.filepath);
    Axios.delete(`http://localhost:4000/api/bss/${this.state.filepath}`).then(
      (res) => {
        if (res.data.deletedCount >= 1) {
          console.log(">>>> successful deletion");
          this.props.refreshAll();
        } else {
          console.log(">>>> nothing deleted");
        }
      }
    );
    console.log("could I run the refresh in here?");
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  handleTypeID = (e) => {
    this.setState({ type_id: e.target.value });
  };

  handleFilepath = (e) => {
    this.setState({ filepath: e.target.value });
  };

  onClose = (e) => {
    console.log("123");
    // this.props.showmodal = false;
    this.setState({ showmodal: false });
  };

  render() {
    return (
      <div className="form-wrapper">
        <h1>Delete Post:</h1>
        <PostForm />
        <button onClick={this.deletePost} action={this.props.refreshCollection}>
          Delete Post
        </button>
      </div>
    );
  }
}
