import React, { Component } from "react";
import Axios from "axios";
export default class UpdateModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      _id: "",
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
  //this.state.location._id??
  //this.state.location._type_id??

  //needs to filter the DB by _id and type_id
  //props get here from SingleCard.jsx e.g.
  //shipDetails = (evt) => {
  //  this.setState({ type_ID: this.props.type_id });
  //  this.setState({ _id: this.props._id });
  //  console.log(this.props.type_id);
  //  console.log(this.props._id);
  //};

  //get the DB object using the filepath
  componentDidMount() {
    Axios.get(
      `http://localhost:4000/api/${this.state.id}/${this.state._id}`
    ).then((res) => {
      console.table(res.data);
      this.setState({
        id: res.data.id,
        username: res.data.username,
        title: res.data.title,
        email: res.data.email,
        type_id: res.data.type_id,
        filepath: res.data.filepath,
      });
    });
  }

  updatePost = (e) => {
    e.preventDefault();

    var updateURL = "";
    console.log("spot>>>>>>>>>>", this.state.type_id);
    console.log("spot>>>>>>>>>>", typeof this.state.type_id);
    console.log("spot>>>>>>>>>>", this.state._id);

    if (this.state.type_id === "1") {
      updateURL = "buildings";
      console.log("build");
    } else if (this.state.type_id === "2") {
      updateURL = "streets";
      console.log("street");
    } else if (this.state.type_id === "3") {
      updateURL = "surroundings";
      console.log("surround");
    }

    //axios has to get the put the updated Form data back into the same DB object via UUID (or filepath?)
    console.log(`http://localhost:4000/api/${updateURL}/${this.state._id}`);

    Axios.put(
      `http://localhost:4000/api/${updateURL}/${this.state._id}`,
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

  handleUserName = (e) => {
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
        <form className="special" onSubmit={this.updatePost}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            onChange={this.handleTitle}
            defaultValue={this.state.title}
          />
          <br />
          <label>Username:</label>
          <br />
          <input
            type="text"
            name="username"
            onChange={this.handleUserName}
            defaultValue={this.state.username}
          />
          <br />
          <label>Name:</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={this.handleName}
            defaultValue={this.state.name}
          />
          <br />
          <label>Email:</label>
          <br />
          <input
            type="text"
            name="email"
            onChange={this.handleEmail}
            defaultValue={this.state.email}
          />
          <br />
          <label>Image Link:</label>
          <br />
          <input
            type="text"
            id="filepath"
            name="filepath"
            onChange={this.handleFilePath}
            defaultValue={this.state.filepath}
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
            defaultValue={this.state.typeID}
          />
          <br />
          <label>Streets:</label>
          <input
            type="radio"
            id="type_id"
            name="category"
            value="2"
            onChange={this.handleTypeID}
            defaultValue={this.state.typeID}
          />
          <br />
          <label>Surroundings:</label>
          <input
            type="radio"
            id="type_id"
            name="category"
            value="3"
            onChange={this.handleTypeID}
            defaultValue={this.state.typeID}
          />
          <br />
        </form>
        <div className="delete-form">
          <div className="delete-box">
            <h3>Are you sure you want to update this post?</h3>
            <button className="cancel-button">Go Back</button>
            <button
              className="delete-button"
              onClick={this.updatePost}
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
