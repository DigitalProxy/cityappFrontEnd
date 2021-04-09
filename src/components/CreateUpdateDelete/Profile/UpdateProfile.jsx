import React, { Component } from "react";
import Axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import Modal from "../Modal";
import Footer from "./Footer";

export default class EditWriter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      DOB: "",
      book: "",
      id: this.props.location.state.id,
      showmodal: false,
      success: false,
      filepath: "",
    };
    console.log(this.state.id);
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/writers/${this.state.id}`).then(
      (res) => {
        console.log(this.state.id);
        console.table(res.data);
        this.setState({
          first_name: res.data.first_name,
          last_name: res.data.last_name,
          DOB: res.data.DOB,
          book: res.data.book,
          id: res.data.id,
        });
      }
    );
  }

  updateWriter = (e) => {
    e.preventDefault();

    Axios.put(
      `http://localhost:4000/api/writers/${this.state.id}`,
      this.state
    ).then((res) => {
      console.log(res);
      if (res.statusText === "OK") {
        this.setState({ showmodal: true });
        //show a different modal if the input is invalid or null
      } else {
        this.setState({ showmodal2: true });
      }
    });
  };

  handleFirstName = (e) => {
    this.setState({ first_name: e.target.value });
  };
  handleLastName = (e) => {
    this.setState({ last_name: e.target.value });
  };
  handleDOB = (e) => {
    this.setState({ DOB: e.target.value });
  };

  handleBookName = (e) => {
    this.setState({ book: e.target.value });
  };

  //this sets the filepath state from the submit click event
  handleFileUpload = (e) => {
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
        <h1>Update Writer:</h1>
        <form className="special" onSubmit={this.updateWriter}>
          <label>First name:</label>
          <input
            type="text"
            name="first_name"
            onChange={this.handleFirstName}
            // defaultValue={this.state.first_name}
          />
          <br />
          <label>Last name:</label>
          <input
            type="text"
            name="last_name"
            onChange={this.handleLastName}
            defaultValue={this.state.last_name}
          />
          <br />
          <label>DOB:</label>
          <input
            type="text"
            name="DOB"
            onChange={this.handleDOB}
            defaultValue={this.state.DOB}
          />
          <br />
          <label>Books:</label>
          <input
            type="text"
            name="book"
            onChange={this.handleBookName}
            defaultValue={this.state.book}
          />
          <br />
          <label>Image</label>
          <input
            type="text"
            name="filepath"
            //input is shipped to filepath in the state
            value={this.state.filepath}
            onChange={this.handleFileUpload}
          />
          <br />
          <button type="submit">Update details</button>
        </form>

        <Footer />

        <Modal showmodal={this.state.showmodal} onClose={this.onClose}>
          <h1>Modal Window Info</h1>
          <h1>Sucess</h1>
          <p>
            {this.state.first_name} {this.state.last_name} has been added.
          </p>
        </Modal>
      </div>
    );
  }
}
