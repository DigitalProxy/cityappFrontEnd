import React, { Component } from "react";
import Axios from "axios";
// import SiteButton from "./SiteButton";
import { navigate } from "@reach/router";
// import * as Globals from "../utils/globals.js";
import Footer from "./Footer";
import Modal from "./Modal";


class UserForm extends Component {
  constructor(props) {
    super(props);
    // state matches express writers model - the model is case-sensitive
    this.state = {
      first_name: "",
      last_name: "",
      DOB: "",
      book: "",
      //runs baked-in datelog to hidden entry in MongoDB
      id: Date.now(),
      showmodal2: false,
    };
  }

  handleSubmit = (event) => {
    console.log("new writer - check MongoDB");
    this.setState({ showmodal2: true });
    //Axios posts the Form date that have been logged in this.state by the user input
    Axios.post("http://localhost:4000/api/writers", this.state).then((res) => {
      console.log(res);
    });

    event.preventDefault();
  };

  handleFirstName = (e) => {
    //takes user input from the form value and logs it into the matching state field
    this.setState({ first_name: e.target.value });
  };
  handleLastName = (e) => {
    //takes user input from the form value and logs it into the matching state field
    this.setState({ last_name: e.target.value });
  };
  handleDOB = (e) => {
    //takes user input from the form value and logs it into the matching state field
    this.setState({ DOB: e.target.value });
  };
  handleBookName = (e) => {
    //takes user input from the form value and logs it into the matching state field
    this.setState({ book: e.target.value });
  };

  onClose = (e) => {
    console.log("onclose");
    this.setState({ showmodal2: false });
  };

  render() {
    return (
      <div className="form-wrapper ">
        <form onSubmit={this.handleSubmit}>
          <div>
            <label className="txt">First Name</label>
            <br />
            <input
              type="text"
              name="first_name"
              placeholder="first name"
              value={this.state.first_name}
              onChange={this.handleFirstName}
            />
          </div>
          <br />
          <div>
            <label>Last Name</label>
            <br />
            <input
              type="text"
              name="last_name"
              placeholder="last name"
              value={this.state.last_name}
              onChange={this.handleLastName}
            />
          </div>
          <br />
          <div>
            <label>D.O.B</label>
            <br />
            <input
              type="date"
              name="DOB"
              placeholder="date of birth"
              value={this.state.DOB}
              onChange={this.handleDOB}
            />
          </div>
          <br />
          <div>
            <label>Book</label>
            <br />
            <input
              type="text"
              name="book"
              placeholder="book title"
              value={this.state.book}
              onChange={this.handleBookName}
            />
          </div>
          <br />

          <input type="hidden" name="id" value={this.state.id} />
          {/* showmodal2={this.state.showmodal2} onSubmit={this.onLog} */}
          <Button type="submit">Submit</Button>
        </form>

        <Modal showmodal2={this.state.showmodal2} onClose={this.onClose}>
          <h1>Writer Form</h1>
          <h1>Complete</h1>
          <p>
            {this.state.first_name} {this.state.last_name} has been added.
          </p>
        </Modal>
        <Footer />
      </div>
    );
  }
}
export default UserForm;
