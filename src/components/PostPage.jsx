import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import MenuPage from "./MenuPage";
import CreatePost from "../components/CreateUpdateDelete/Post/CreatePost";
import UpdatePost from "../components/CreateUpdateDelete/Post/UpdatePost";
import DeletePost from "./CreateUpdateDelete/Post/DeletePost";

export default class PostPage extends Component {
  render() {
    return (
      <div>
        <h1>POST</h1>
        <CreatePost />
        {/* <UpdatePost />
        <DeletePost /> */}
        <MenuPage />
      </div>
    );
  }
}
