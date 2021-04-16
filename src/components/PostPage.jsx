import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";

import CreatePost from "../components/CreateUpdateDelete/Post/CreatePost";
import UpdateModal from "../components/CreateUpdateDelete/Post/UpdateModal";
import DeleteModal from "./CreateUpdateDelete/Post/DeleteModal";
import SingleCard from "./CreateUpdateDelete/Post/SingleCard";

export default class PostPage extends Component {
  render() {
    return (
      <div>
        <h1>POST</h1>
        <SingleCard />
        {/* <CreatePost /> */}
        {/* <UpdateModal /> */}
        {/* <DeleteModal /> */}
      </div>
    );
  }
}
