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
      url: "http://localhost:4000/api/photos",
      photos: [],
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      console.log(res.data);
      this.setState({ photos: res.data });
    });
  }

  render() {
    console.log(this.state.photos);
    return (
      <div>
        {this.state.photos.map((item, index) => {
          return (
            <div>
              <Collection
                key={index}
                title={item.title}
                name={item.name}
                email={item.email}
                type={item.type_id}
                primary_color={item.color_id}
                filepath={item.filepath}
                id={item.id}
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
