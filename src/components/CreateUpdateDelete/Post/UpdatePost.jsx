import React, { Component } from "react";
import Axios from "axios";
import PostForm from "./PostForm";
export default class UpdatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.location.state.id,
      username: "",
      title: "",
      name: "",
      email: "",
      type_id: "",
      filepath: this.props.location.state.filepath,
      comment: "",
      showmodal: false,
      success: false,
    };
  }

  //props need to get here from single card
  //needs to filter the DB by filepath
  // shipFilepath = (evt) => {
  //   console.log(this.props.filepath);
  //   this.setState({ id: this.props.filepath });
  // };

  //get the DB object using the filepath
  componentDidMount() {
    Axios.get(`http://localhost:4000/api/${this.state.id}/${this.state.filepath}`).then(
      (res) => {
        console.table(res.data);
        this.setState({
          id: res.data.id,
          username: res.data.username,
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

    var updateURL = "";
    console.log("spot>>>>>>>>>>", this.state.type_id)
    console.log("spot>>>>>>>>>>", typeof(this.state.type_id))
    console.log("spot>>>>>>>>>>", this.state.filepath)

    if (this.state.type_id === "1") {
      updateURL = "buildings"
      console.log("build")
    } else if (this.state.type_id === "2") {
      updateURL = "streets"
      console.log("street")
    } else if (this.state.type_id === "3") {
      updateURL = "surroundings"
      console.log("surround")
    }

    //axios has to get the put the updated Form data back into the same DB object via UUID (or filepath?)
    console.log(`http://localhost:4000/api/${updateURL}/${this.state.filepath}`)

    Axios.put(`http://localhost:4000/api/${updateURL}/${this.state.filepath}`, this.state).then(
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
      </div>
    );
  }
}
