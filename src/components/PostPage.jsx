import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import MenuPage from "./MenuPage";
import CreatePost from "../components/CreateUpdateDelete/Post/CreatePost";
import UpdateModal from "../components/CreateUpdateDelete/Post/UpdateModal";
import DeleteModal from "./CreateUpdateDelete/Post/DeleteModal";
import addPost from "./CreateUpdateDelete/Post/addPost";
import SingleFeed from "./CreateUpdateDelete/Post/SingleFeed";

export default class PostPage extends Component {
  render() {
    return (
      <div>
        <h1>POST</h1>
        {/* <CreatePost /> */}
        {/* <UpdateModal /> */}
        <SingleFeed />
        {/* <DeleteModal /> */}
        <MenuPage />
        <addPost />
      </div>
    );
  }
}
