import React, { Component } from "react";
import Axios from "axios";

export default class UpdateWriter extends Component {
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
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/writers/${this.state.id}`).then(
      (res) => {
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
        alert("Success - this needs a pretty modal");
      } else {
        alert("Fail - this needs a pretty modal");
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
            defaultValue={this.state.first_name}
          />

          <label>Last name:</label>
          <input
            type="text"
            name="last_name"
            onChange={this.handleLastName}
            defaultValue={this.state.last_name}
          />

          <label>DOB:</label>
          <input
            type="text"
            name="DOB"
            onChange={this.handleDOB}
            defaultValue={this.state.DOB}
          />

          <label>Books:</label>
          <input
            type="text"
            name="book"
            onChange={this.handleBookName}
            defaultValue={this.state.book}
          />

          <br />
          <button type="submit">Update details</button>
        </form>
      </div>
    );
  }
}
