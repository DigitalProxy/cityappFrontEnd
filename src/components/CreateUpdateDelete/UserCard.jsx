import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import Typography from "@material-ui/core/Typography";

//single card
class WritersSingle extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <div>
          <Typography variant="h2">Writer</Typography>
          {/* <UserButton/> */}
          <Typography variant="h2">{this.props.firstname}</Typography>
          <Typography variant="h2">{this.props.lastname}</Typography>
          <Typography variant="h2">{this.props.book}</Typography>
          <img src={"./images/" + this.props.filepath} alt="writer image" />
          {/* {this.props.filepath ? (
            <img src={"./images/" + this.props.filepath} alt="writer image" />
          ) : null} */}
        </div>
      </div>
    );
  }
}
export default WritersSingle;
