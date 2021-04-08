import React, { Component } from "react";
import axios from "axios";

// fast css stying, its an object, key:value
var statementStyle = { color: "crimson" };

export default class ShowUsers extends Component {
  // Lifecycle Method One

  constructor(props) {
    super(props);
    // set the state, ready to be updated
    this.state = {
      url: "https://jsonplaceholder.typicode.com/users",
      users: [],
    };
  }

  // Lifecycle Method Two
  componentDidMount() {
    axios.get(this.state.url).then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }

  // Every time 'state' updates the render function re-runs
  render() {
    return (
      <React.Fragment>
        {this.state.users.map((item, index) => {
          return (
            <div key={index}>
              <p>Contact Name: {item.name}</p>
              <p>Email: {item.email}</p>
              <p>Company: {item.company.name}</p>
              <p style={statementStyle}>Mission: {item.company.catchPhrase}</p>
              <hr></hr>
            </div>
          );
        })}
      </React.Fragment>
    );
  }
}
