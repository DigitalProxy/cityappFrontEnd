//**COLLECTION**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";

class ProfileCollection extends Component {
    refreshList = (e) => {
      axios.get(this.state.url).then((res) => {
        console.log(res.data);
        this.setState({ bss: res.data });
      });
    };
  
    render() {
        
      return (
        <div key={this.props.key}>
        <Link
              onClick={this.shipFilePath}
              state={{ filepath: this.props.filepath, id: this.props.id }}
              to="/post"
            >
        </Link>
        <h2 style={imgTitleStyle}>{this.props.title}</h2>
        <img src={this.props.filepath} />
      </div>
    );
  }
}
export default ProfileCollection;
