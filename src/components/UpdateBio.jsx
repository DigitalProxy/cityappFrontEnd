import React, { Component } from "react";
import Axios from "axios";

class UpdateBio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      camera: "",
      location: "",
      user_id: "",
      id: this.props.location.state.id,
      showmodal: false,
      success: false,
    };
  }

  render() {
    return <div></div>;
  }
}
export default UpdateBio;
