import React, { Component } from "react";
import Axios from "axios";
import PostForm from "./PostForm";
export default class UpdatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      title: "",
      name: "",
      email: "",
      type_id: "",
      filepath: "",
      showmodal: false,
      success: false,
    };
  }

  //needs to filter the DB by the users name (or filepath?)
  componentDidMount() {
    Axios.get(`http://localhost:4000/api/bss/${this.state.name}`).then(
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

    //axios has to get the put the updated Form data back into the same DB object via UUID (or filepath?)
    Axios.put(
      `http://localhost:4000/api/$var/${this.state.id}`,
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
      <div>
        <h1>Update Post:</h1>
        <PostForm />
        <br />
        <button type="submit">Update post</button>
      </div>
    );
  }
}
