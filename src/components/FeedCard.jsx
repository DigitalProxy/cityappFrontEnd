//**CARD**
//**REACT**
import React, { Component } from "react";
//AXIOS DATA MANAGEMENT
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
//APP PAGES
import Collection from "./Collection";

class FeedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "http://localhost:4000/api/bss",
      fullStack: [],
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      console.log("app>>>>>>>>")
      console.log(res.data);
      this.setState({ fullStack: res.data.result });
      console.log(res.data.result)
      console.log("app<<<<<<<<")
    });
  }

  render() {
    return (
      <div>
        {this.state.fullStack.map((item, index) => {
          return (
            <div>
              <Collection
                key={index}
                id={item._id}
                title={item.title}
                name={item.name}
                email={item.email}
                type={item.type_id}
                filepath={item.filepath}
              />
              <Link to="/like">LIKE</Link>
              <br />
              <Link to="/share">SHARE</Link>
              <br />
              <Link to="/comment">COMMENT</Link>
            </div>
          );
        })}
        {/* <Menu /> */}
      </div>
    );
  }
}
export default FeedCard;
