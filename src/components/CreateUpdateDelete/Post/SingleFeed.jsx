import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";

//single image card
class SingleFeed extends Component {
  shipFilepath = (evt) => {
    console.log(this.props.filepath);
    this.setState({ filepath: this.props.filepath });
  };

  shipUserName = (evt) => {
    console.log(this.props.username);
    this.setState({ filepath: this.props.username });
  };

  deletePost = (e) => {
    console.log("deleting ", this.props.filepath);
    axios
      .delete(`http://localhost:4000/api/bss/${this.props.filepath}`)
      .then((res) => {
        if (res.data.deletedCount >= 1) {
          console.log(">>>> successful deletion");
          this.props.refreshFeed();
        } else {
          console.log(">>>> nothing deleted");
        }
      });
    console.log("could I run the refresh in here?");
  };

  //NEED TO PUT PATHS IN FOR THE LINKS
  render() {
    return (
      <div key={this.props.key}>
        <div>
          <h2>{this.props.username}</h2>
          <h2>{this.props.title}</h2>

          <Link
            onClick={this.shipUserName}
            state={{ username: this.props.username }}
            to="/bio"
            >See Bio
            <Link/>
            <br />

          <Link
            onClick={this.shipUserName}
            state={{ username: this.props.username }}
            to="/post"
            >Create Post
            <Link/>
            <br />


          
            <Link
            onClick={this.shipFilePath}
            state={{ filepath: this.props.filepath }}
            to="/post"
            >Delete Post
            <Link/>
            <br />
        </div>
      </div>
    );
  }
}
export default SingleFeed;
