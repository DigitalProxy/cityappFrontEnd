import React, { Component } from "react";
import Axios from "axios";
import PostForm from "./PostForm";

export default class DeletePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
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

  //assign filepath to create delete point
  componentDidMount() {
    Axios.get(`http://localhost:4000/api/bss/${this.state.filepath}`).then(
      (res) => {
        console.table(res.data);
        this.setState({
          id: res.data.id,
          title: res.data.title,
          email: res.data.email,
          type_id: res.data.type_id,
          filepath: res.data.filepath,
        });
      }
    );
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
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
