//**BIO**
import React, { Component } from "react";
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import Artist2 from "./Artist";
import Artist from "./Artist";

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1,
      artistbio: {
        title: "",
        name: "",
        email: "",
        type_id: "",
        filepath: "",
      },
      //filepath data comes from the db call along with the other items
      // console.log(this.props.location.state.id),
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/api/buildings/${this.state.id}`)
      .then((res) => {
        console.log(this.state.id);
        console.log(res.data);
        this.setState({ artistbio: res.data });
      });
  }

  // shipID = (evt) => {
  //   console.log(this.props.location.state.id);
  //   this.setState({ id: this.props.location.state.id });
  // };

  render() {
    console.table(this.state.artistbio);
    console.log(this.state.id);

    return (
      <div>
        {/* {item.first_name}
            {item.last_name} */}
        <Artist
          title={this.state.artistbio.title}
          name={this.state.artistbio.name}
          email={this.state.artistbio.email}
          type={this.state.artistbio.type_id}
          primarycolor={this.state.artistbio.color_id}
          filepath={this.state.artistbio.filepath}
          id={this.state.artistbio.id}
        />
      </div>
    );
  }
}
export default Bio;
