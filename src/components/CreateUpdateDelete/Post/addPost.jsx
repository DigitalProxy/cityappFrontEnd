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
                        Image
                        <input className="filepath input" />
                    </label>
                    <label>
                        Title
                        <input className="title input" />
                    </label>
                    <label>
                        Name
                        <input className="name input" />
                    </label>
                    <label>
                        Email
                        <input className="email input" />
                    </label>
                </form>
                <button className="add form-button">Add Post</button>
                <button className="back form-button">Back</button>
            </div>
        )
    }
}
