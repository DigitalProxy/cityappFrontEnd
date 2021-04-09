//**COLLECTION**
import React, { Component } from "react";
import { Router, Link, navigate } from "@reach/router";
import axios from "axios";



var titleStyle = {
  textAlign: "left",
  marginLeft: "10px",

}

var titleStyle2 = {
  display: "flex",
  marginLeft: "20px",
  marginTop: "10px",
}

var imgTitleStyle = {
  textAlign: "left",
  padding: "0",
  margin: "0",
  textTransform: "uppercase",
  fontSize: "13px",
  marginBottom: "10px",
  marginTop: "5px",
  marginLeft: "20px",

}

var spacing = {
  marginRight: "20px",
  marginTop: "15px",
}

var flexStyle = {
  display: "flex",
  justifyContent: "space-between",
}
var pStyle1 = {
  padding: "0",
  margin: "0",
  textTransform: "uppercase",
  fontSize: "10px",
  marginTop: "3px",
}

var pStyle2 = {
  padding: "0",
  margin: "0",
  textTransform: "uppercase",
  fontSize: "10px",
  marginTop: "2px",
}

//single card
class Collection extends Component {
  shipID = (evt) => {
    console.log("hello id");
    console.log(this.props.id);
    this.setState({ id: this.props.id });
  };

  render() {
    return (
      <div key={this.props.key}>
        <div>
          {/* <UserButton/> */}
          <div style={flexStyle}>
            <div style={titleStyle2}>
              <div>
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14.5" cy="14.5" r="14.5" fill="#CE2E4A" />
                  <path d="M14.4255 7.02567C8.71903 7.06777 4.02916 11.9192 2.39197 14.3501C4.02916 16.7811 8.71903 21.6325 14.4255 21.6746C20.1319 21.6325 24.8218 16.7811 26.459 14.3501C24.8218 11.9192 20.1319 7.06777 14.4255 7.02567Z" fill="white" />
                  <circle cx="14.5" cy="14.4999" r="4.93299" fill="#FFB0B0" />
                  <path d="M19.433 14.4999C19.433 15.4755 19.1437 16.4293 18.6016 17.2405C18.0596 18.0517 17.2892 18.684 16.3878 19.0574C15.4864 19.4307 14.4945 19.5284 13.5376 19.3381C12.5807 19.1477 11.7017 18.6779 11.0119 17.988C10.322 17.2981 9.85214 16.4192 9.6618 15.4623C9.47146 14.5054 9.56915 13.5135 9.94252 12.6121C10.3159 11.7107 10.9482 10.9403 11.7594 10.3983C12.5706 9.85621 13.5244 9.56689 14.5 9.56689V14.4999H19.433Z" fill="#CE2E4A" />
                  <path d="M17.9882 17.988C18.4462 17.53 18.8096 16.9862 19.0575 16.3877C19.3054 15.7892 19.433 15.1477 19.433 14.4999H14.5L17.9882 17.988Z" fill="#FF5F5F" />
                  <circle cx="14.4999" cy="14.4997" r="2.54124" fill="#1F1F1F" />
                  <circle cx="13.304" cy="13.005" r="1.34536" fill="white" />
                </svg>


              </div>
              <div style={titleStyle}>
                <p style={pStyle1}>CATEGORY - <strong>BUILDINGS</strong></p>
                <p style={pStyle2}>POSTED BY: {this.props.name} - {Math.floor((Math.random() * 24) + 1)}H</p>
              </div>

            </div>
            <Link
              onClick={this.shipID}
              state={{ id: this.props.id }}
              to="/artistsbio"
            >
              <svg style={spacing} width="3" height="13" viewBox="0 0 3 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="1.5" cy="1.5" r="1.5" fill="#1F1F1F" />
                <circle cx="1.5" cy="6.5" r="1.5" fill="#1F1F1F" />
                <circle cx="1.5" cy="11.5" r="1.5" fill="#1F1F1F" />
              </svg>

            </Link>

          </div>
          <h2 style={imgTitleStyle}>{this.props.title}</h2>
          <img src={this.props.filepath} />

        </div>
      </div>
    );
  }
}
export default Collection;
