//**CARD**
//**REACT**
import React, { Component } from "react";
//AXIOS DATA MANAGEMENT
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
//APP PAGES
import Collection from "./Collection";
import Bio from "./CreateUpdateDelete/Users/Bio";

// STYLES
var socialStyle = {
  display: "flex",
  justifyContent: "space-between",
};

var shareStyle = {
  display: "flex",
  marginRight: "20px",
  marginTop: "2px",
};

var linkStyle = {
  textDecoration: "none",
  color: "#1f1f1f",
};

var spacing = {
  marginLeft: "11px",
  marginTop: "2px",
  marginBottom: "2px",
  display: "flex",
  textDecoration: "none",
};

var randomStats = {
  color: "#1f1f1f",
  fontWeight: "bold",
  marginTop: "2px",
  marginLeft: "5px",
<<<<<<< HEAD
};
=======
}
// END STYLES
>>>>>>> dc26469222dc2df3a28625c2a438216980f94cfb

class FeedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "http://localhost:4000/api/bss",
      fullStack: [],
      item: {},
      isFeed: true,
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      console.log("app>>>>>>>>");
      console.log(res.data);
      this.setState({ fullStack: res.data.result });
      console.log(res.data.result);
      console.log("app<<<<<<<<");
    });
  }

  shipID = (evt) => {
    console.log("hello filepath");
    console.log(this.props._id);
    this.setState({ _id: this.props._id });
  };

  titleCallback = (item) => {
    this.setState({ item: item, isFeed: false });
  };

  //props from DeletePost.jsx??
  // refreshCollection = (e) => {
  //   axios.get(this.state.url).then((res) => {
  //     console.log(res.data);
  //     this.setState({ writers: res.data });
  //   });
  // };

  render() {
    let current_screen;

<<<<<<< HEAD
    if (this.state.isFeed) {
      current_screen = (
        <div>
          {this.state.fullStack.map((item, index) => {
            return (
              <div>
                <Collection
                  _id={item._id}
                  key={index}
                  title={item.title}
                  name={item.name}
                  email={item.email}
                  type={item.type_id}
                  filepath={item.filepath}
                  id={item.id}
                  item={item}
                  titleCallback={this.titleCallback}
                />

                {/* knows the title */}

=======
    if(this.state.isFeed){
      current_screen = <div>
        {this.state.fullStack.map((item, index) => {
          return (
            <div>
              <Collection
                _id={item._id}
                key={index}
                title={item.title}
                name={item.name}
                email={item.email}
                type={item.type_id}
                filepath={item.filepath}
                id={item.id}
                item={item}
                titleCallback={this.titleCallback}

              />
              <div style={socialStyle}>
>>>>>>> dc26469222dc2df3a28625c2a438216980f94cfb
                <div style={socialStyle}>
                  <div style={socialStyle}>
                    <Link style={spacing} to="/like">
                      <svg
                        style={spacing}
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="8" cy="8" r="8" fill="#CE2E4A" />
                        <path
                          d="M7.95888 3.87662C4.8105 3.89984 2.22298 6.57647 1.3197 7.9177C2.22298 9.25893 4.8105 11.9356 7.95888 11.9588C11.1073 11.9356 13.6948 9.25893 14.5981 7.9177C13.6948 6.57647 11.1073 3.89984 7.95888 3.87662Z"
                          fill="white"
                        />
                        <circle
                          cx="7.99997"
                          cy="7.99997"
                          r="2.72165"
                          fill="#FFB0B0"
                        />
                        <path
                          d="M10.7216 7.99997C10.7216 8.53826 10.562 9.06446 10.2629 9.51204C9.96388 9.95961 9.53882 10.3085 9.0415 10.5144C8.54418 10.7204 7.99695 10.7743 7.469 10.6693C6.94105 10.5643 6.4561 10.3051 6.07547 9.92447C5.69484 9.54384 5.43563 9.05889 5.33062 8.53094C5.2256 8.00299 5.2795 7.45576 5.48549 6.95844C5.69149 6.46112 6.04033 6.03606 6.4879 5.737C6.93548 5.43794 7.46168 5.27832 7.99997 5.27832V7.99997H10.7216Z"
                          fill="#CE2E4A"
                        />
                        <path
                          d="M9.92447 9.92447C10.1772 9.67174 10.3777 9.37171 10.5144 9.0415C10.6512 8.71129 10.7216 8.35738 10.7216 7.99997H7.99997L9.92447 9.92447Z"
                          fill="#FF5F5F"
                        />
                        <circle
                          cx="8.00008"
                          cy="8.00021"
                          r="1.40206"
                          fill="#1F1F1F"
                        />
                        <circle
                          cx="7.34029"
                          cy="7.17537"
                          r="0.742268"
                          fill="white"
                        />
                      </svg>

                      <p style={randomStats}>
                        {Math.floor(Math.random() * 150 + 1)}
                      </p>
                    </Link>
                    <br />
                    <Link style={spacing} to="/comment">
                      <svg
                        style={spacing}
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="16" height="2.26262" fill="#CE2E4A" />
                        <rect
                          y="3.95947"
                          width="10.88"
                          height="2.26262"
                          fill="#FF5F5F"
                        />
                        <rect
                          y="7.91943"
                          width="14.08"
                          height="2.26262"
                          fill="#CE2E4A"
                        />
                        <rect
                          y="11.8789"
                          width="6.26087"
                          height="2.12121"
                          fill="#1F1F1F"
                        />
                      </svg>

                      <p style={randomStats}>
                        {Math.floor(Math.random() * 24 + 1)}
                      </p>
                    </Link>
                  </div>
                  <div style={shareStyle}>
                    <br />
                    <Link style={linkStyle} to="/share">
                      <strong>SHARE</strong>{" "}
                    </Link>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      );
    } else {
      current_screen = <Bio item={this.state.item} />;
    }
    return (
      <div className="feed">
        {current_screen}
      </div>
    );
  }
}
export default FeedCard;
