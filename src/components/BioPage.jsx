import React, { Component } from "react";
import Bio from "../components/CreateUpdateDelete/Users/Bio";
import SinglePost from "../components/SinglePost"
import SingleFeed from "./CreateUpdateDelete/Post/SingleFeed";

export default class BioPage extends Component {
  render() {
    return (
      <div>
        <h1>CREATE BIO</h1>
        <Bio />
        <SinglePost />
        {/* <SingleFeed /> */}
      </div>
    );
  }
}
