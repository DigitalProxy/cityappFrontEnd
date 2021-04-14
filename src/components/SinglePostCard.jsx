import React, { Component } from "react";

class SinglePostCard extends Component {
    render() {
        return (
            <div key={this.props.key}>
                <div>
        <h2>{this.props.title}</h2>
        <h2>{this.props.name}</h2>
                </div>
            </div>
        )
    }
}
export default SinglePostCard;