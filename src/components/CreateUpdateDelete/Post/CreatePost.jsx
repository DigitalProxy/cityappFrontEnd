import React, { Component } from "react";
import Axios from "axios";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    //are we missing an id field in the handles?
    //do we even need an empty state here?
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

  //put new post into DB
  //somehow need to use the type_id from the from form input into the put command (use variable?)
  createPost = (e) => {
    e.preventDefault();

    var createURL = "";
    console.log("spot>>>>>>>>>>", this.state.type_id)
    console.log("spot>>>>>>>>>>", typeof(this.state.type_id))

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

    console.log(`http://localhost:4000/api/${createURL}`)
    Axios.post(`http://localhost:4000/api/${createURL}`, this.state).then(
      (res) => {
        console.log(res);
        if (res.statusText === "OK") {
          alert("Success - this needs a pretty modal");
        } else {
          alert("Fail - this needs a pretty modal");
        }
      }
    );
  }

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
    console.log("title>>>>>>")
  };

  handleUsername = (e) => {
    this.setState({ username: e.target.value });
    console.log("username>>>>>>")
  };

  handleName = (e) => {
    this.setState({ name: e.target.value });
    console.log("name>>>>>>")
  };

  handleEmail = (e) => {
    this.setState({ email: e.target.value });
    console.log("email>>>>>>")
  };

  handleTypeID = (e) => {
    this.setState({ type_id: e.target.value });
    console.log("id>>>>>>>>")
  };

  handleFilePath = (e) => {
    this.setState({ filepath: e.target.value });
    console.log("filepath>>>>>>")
  };

  handleComment = (e) => {
    this.setState({ filepath: e.target.value });
    console.log("comment>>>>>>")
  };

  onClose = (e) => {
    console.log("123");
    // this.props.showmodal = false;
    this.setState({ showmodal: false });
  };

  render() {
    return (
      <div className="form-wrapper">
        <form className="special" onSubmit={this.createPost}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            onChange={this.handleTitle}
            // defaultValue={this.state.title}
          />
          <br />
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            onChange={this.handleUsername}
            // defaultValue={this.state.username}
          />
          <br />
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={this.handleName}
            // defaultValue={this.state.name}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={this.handleEmail}
            // defaultValue={this.state.email}
          />
          <br />
          <label>Image Link:</label>
          <br />
          <input
            type="text"
            id="filepath"
            name="filepath"
            onChange={this.handleFilePath}
            // defaultValue={this.state.filepath}
          />
          <br />
          <label>Category:</label>
          <br />
          <label>Buildings:</label>
          <input
            type="radio"
            id="type_id"
            name="category"
            value="1"
            onChange={this.handleTypeID}
            // defaultValue={this.state.typeID}
          />
          <br />
          <label>Streets:</label>
          <input
            type="radio"
            id="type_id"
            name="category"
            value="2"
            onChange={this.handleTypeID}
            // defaultValue={this.state.typeID}
          />
          <br />
          <label>Surroundings:</label>
          <input
            type="radio"
            id="type_id"
            name="category"
            value="3"
            onChange={this.handleTypeID}
            // defaultValue={this.state.typeID}
          />
          <br />
          <button type="submit">Create post</button>
        </form>

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
  
    
