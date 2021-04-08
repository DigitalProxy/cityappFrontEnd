import React, { Component } from "react";
import axios from "axios";

class DeleteBio extends Component {
  shipID = (evt) => {
    console.log(this.props.id);
    this.setState({ id: this.props.id });
  };

  deleteBio = (e) => {
    console.log("deleting ", this.props.id);
    axios
      .delete(`http://localhost:4000/api/photos/${this.props.id}`)
      .then((res) => {
        if (res.data.deletedCount >= 1) {
          console.log(">>>> successful deletion");
          this.props.refreshPhotos();
        } else {
          console.log(">>>> nothing deleted");
        }
      });
    console.log("could I run the refresh in here?");
  };

  render() {
    return <div></div>;
  }
}
export default DeleteBio;
