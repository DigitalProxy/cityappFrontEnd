import React, { Component } from "react";
import axios from "axios";
import { Router, Link, navigate } from "@reach/router";
import SinglePostCard from "../components/SinglePostCard"
import SingleFeed from "./CreateUpdateDelete/Post/SingleFeed";


class SinglePost extends Component {
    constructor(props) {
        super(props);

        this.state = {
            viewpost: {
                title: "",
                name: "",
                filepath: "",
            },
            // console.log(this.props.title)
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:4000/api/bss/${this.props.filepath}`).then((res) => {
            console.log(this.state.title)
            console.log(res.data)
            console.log(this.props.filepath)
        })
    }

    render() {
        return (
            <div>
                <SingleFeed 
                title={this.state.viewpost.title}
                name={this.state.viewpost.name}
                filepath={this.state}
                />
               
            </div>
        )
    }



}
export default SinglePost;