import React, { Component } from "react";
import Axios from "axios";
import PostForm from "./PostForm";

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

  // refreshCollection = (e) => {
  //   axios.get(this.state.url).then((res) => {
  //     console.log(res.data);
  //     this.setState({ writers: res.data });
  //   });
  // };

  deletePost = (e) => {

    var createURL = "";
    console.log("spot>>>>>>>>>>", this.state.title)
    console.log("spot>>>>>>>>>>", typeof(this.state.title))

    if (this.state.type_id === "1") {
      createURL = "buildings"
      console.log("build")
    } else if (this.state.type_id === "2") {
      createURL = "streets"
      console.log("street")
    } else if (this.state.type_id === "3") {
      createURL = "surroundings"
      console.log("surround")
    }
    console.log("deleting ", this.props.title);

    Axios
      .delete(`http://localhost:4000/api/${createURL}${this.state.title}`)
      .then((res) => {
        if (res.data.deletedCount >= 1) {
          console.log(">>>> successful deletion");
          this.props.refreshFeed();
        } else {
          console.log(">>>> nothing deleted");
        }
      });
    console.log("could I run the refresh in here?");
  };
  
  // handleTitle = (e) => {
  //   this.setState({ title: e.target.value });
  // };

  // handleUsername = (e) => {
  //   this.setState({ username: e.target.value });
  // };

  // handleName = (e) => {
  //   this.setState({ name: e.target.value });
  // };

  // handleEmail = (e) => {
  //   this.setState({ email: e.target.value });
  // };

  // handleTypeID = (e) => {
  //   this.setState({ type_id: e.target.value });
  // };

  // handleFilepath = (e) => {
  //   this.setState({ filepath: e.target.value });
  // };

  // onClose = (e) => {
  //   console.log("123");
  //   // this.props.showmodal = false;
  //   this.setState({ showmodal: false });
  // };

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
