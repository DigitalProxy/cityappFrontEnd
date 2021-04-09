import React, { Component } from "react";
import Axios from "axios";



deletePost = (e) => {
  console.log("deleting ", this.props.id);
  axios
    .delete(`http://localhost:4000/api/all/${this.props.id}`)
    .then((res) => {
      if (res.data.deletedCount >= 1) {
        console.log(">>>> successful deletion");
        this.props.refreshAll();
      } else {
        console.log(">>>> nothing deleted");
      }
    });
  console.log("could I run the refresh in here?");
};

<button onClick={this.deletePost} action={this.props.refreshCollection}>
  Delete Post
</button>;

