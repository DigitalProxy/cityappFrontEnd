import React, { Component } from "react";
import Axios from "axios";
import PostForm from "./PostForm";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      name: "",
      email: "",
      type_id: "",
      filepath: "",
      showmodal: false,
      success: false,
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/buildings/${this.state.id}`).then(
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

  updatePost = (e) => {
    e.preventDefault();

    //get

    Axios.put(
      `http://localhost:4000/api/buildings/${this.state.id}`,
      this.state
    ).then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        alert("Success - this needs a pretty modal");
      } else {
        alert("Fail - this needs a pretty modal");
      }
    });
  };

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

  handleFilePath = (e) => {
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
        <h1>Create Post:</h1>
        <PostForm />
        <button type="submit">Create post</button>
      </div>
    );
  }
}
