//**CARD**
//**REACT**
import React, { Component } from "react";
//DATA MANAGEMENT
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
//COMPONENTS
import ProfileCollection from "../Profile/ProfileCollection"

class FeedCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "http://localhost:4000/api/users",
      usersCollection: [],
    };
  }

  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      console.log("app>>>>>>>>");
      console.log(res.data);
      this.setState({ usersCollection: res.data.result });
      console.log(res.data.result);
      console.log("app<<<<<<<<");
    });
  }

  shipProfile = (evt) => {
    console.log("hello filepath");
    console.log(this.props.id, this.props.filepath);
    this.setState({ id: this.props.id, filepath: this.props.filepath });
  };

  render() {
        return(
        <div>
        {this.state.usersCollection.map((item, index) => {
              <ProfileCollection
                _id={item._id}
                username={item.username}
                name={item.name} 
                email={item.email} 
                city={item.city} 
                country={item.country} 
                about={item.about} 
                instagram={item.instagram} 
                twitter={item.twitter} 
                fb={item.fb}
                website={item.website} 
              />
        })}
      </div>
        );
  }
}
export default FeedCard;
