import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import MenuPage from "./MenuPage";
import ProfileCard from "../components/CreateUpdateDelete/Profile/ProfileCard";
import CreateProfile from "../components/CreateUpdateDelete/Profile/CreateProfile";
import DeleteProfile from "../components/CreateUpdateDelete/Profile/DeleteProfile";
import UpdateProfile from "../components/CreateUpdateDelete/Profile/UpdateProfile";

export default class ProfilePage extends Component {
  render() {
    return (
      <div>
        <h1>CREATE/UPDATE/DELETE PROFILE</h1>
        <ProfileCard />
        {/* <CreateProfile />
        <DeleteProfile />
        <UpdateProfile /> */}
        <MenuPage />
      </div>
    );
  }
}
