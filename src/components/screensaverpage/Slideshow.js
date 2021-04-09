import React, { Component } from 'react'
import axios from 'axios'
//set up state and props to loop through three images

export default class Slideshow extends Component {
    state = {
        photos: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/buildings')
        .then(res => {
            this.setState({ 
                photos: res.data
            })
        })
    }

    render() {

        let slides = this.state.photos
        console.log(slides)
        return (
            <div className="slideshow-container">
                { this.state.photos.map( filepath => (
                    <img key={filepath.photos} src={filepath.filepath} alt=" " />
                ))}
            </div>
        )
    }
}
