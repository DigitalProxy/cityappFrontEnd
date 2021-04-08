//**BIO**
import React, { Component } from "react";
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import Creator from "./Creator";

class Bio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.location.state.id,
      creatorbio: {
        title: "",
        name: "",
        email: "",
        type_id: "",
        color_id: "",
        filepath: "",
        id: "",
      },
      //filepath data comes from the db call along with the other items
      // console.log(this.props.location.state.id),
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:4000/api/photos/${this.state.id}`)
      .then((res) => {
        console.log(this.state.id);
        console.log(res.data);
        this.setState({ creatorbio: res.data });
      });
  }

  // shipID = (evt) => {
  //   console.log(this.props.location.state.id);
  //   this.setState({ id: this.props.location.state.id });
  // };

  render() {
    console.table(this.state.creatorbio);
    // console.log(this.state.id);
    console.log(this.props.location.state.id);
    return (
      <div>
        {/* {item.first_name}
            {item.last_name} */}
        <Creator
          title={this.state.creatorbio.title}
          name={this.state.creatorbio.name}
          email={this.state.creatorbio.email}
          type={this.state.creatorbio.type_id}
          primarycolor={this.state.creatorbio.color_id}
          filepath={this.state.creatorbio.filepath}
          id={this.state.creatorbio.id}
        />
      </div>
    );
  }
}
export default Bio;
