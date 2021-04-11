import React, { Component } from "react";
import Axios from "axios";

export default class CreatePost extends Component {
  constructor(props) {
    super(props);
    // state matches express Buildings/Streets/Surroundings collection models
    //runs baked-in datelog to hidden entry in MongoDB
    this.state = {
      title: "",
      name: "",
      email: "",
      type_id: "",
      filepath: "",
      id: Date.now(),
      showmodal: false,
      success: false,
    };
  }

  //the id here needs to be a UUID
  componentDidMount() {
    Axios.get(`http://localhost:4000/api/bss/${this.state.id}`).then((res) => {
      console.table(res.data);
      this.setState({
        id: res.data.id,
        title: res.data.title,
        email: res.data.email,
        type_id: res.data.type_id,
        filepath: res.data.filepath,
      });
    });
  }

  updatePost = (e) => {
    e.preventDefault();

    //put the Form input into the DB

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
