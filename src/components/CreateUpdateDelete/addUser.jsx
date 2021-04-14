import React, { Component } from 'react'
import axios from 'axios'

export default class AddPostForm extends Component {

    componentDidMount() {
        axios.get('http://localhost:4000/api/bss')
        .then(res => {
            this.setState({ 
                photos: res.data
            })
        })
    }

    render() {
        return (
            <div className="form-container">
                <h3>Add Post</h3>

                <form className="add-post">

                    <label>
                        Username
                        <input className="username input" />
                    </label>

                    <label>
                        Name
                        <input className="name input" />
                    </label>

                    <label>
                        Email
                        <input className="email input" />
                    </label>

                    <label>
                        City
                        <input className="city input" />
                    </label>

                    <label>
                        Country
                        <input className="country input" />
                    </label>

                    <label>
                        About
                        <input className="about input" />
                    </label>

                    <label>
                        Instagram
                        <input className="instagram input" />
                    </label>

                    <label>
                        Twitter
                        <input className="twitter input" />
                    </label>

                    <label>
                        fb
                        <input className="fb input" />
                    </label>

                    <label>
                        website
                        <input className="website input" />
                    </label>


                </form>

                <button className="add form-button">Add Post</button>
                <button className="back form-button">Back</button>
            </div>
        )
    }
}


{
    _id: String,
    username: String,
    name: String,
    email: String,
    city: String,
    country: String,
    about: String,
    instagram: String,
    twitter: String,
    fb: String,
    website: String,
  },
  