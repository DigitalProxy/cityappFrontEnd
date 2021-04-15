import React, { Component } from 'react'
import axios from 'axios'

export default class Slideshow extends Component {
    constructor(props){
        super(props)
        this.state = {
            photos: [],
            randomImage: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/api/buildings')
        .then(res => {
            this.setState({
                photos: res.data
            })
        })
        .then(() => {
            this.findRandomImage()
        })
    }

    findRandomImage = () => {
        var myCount = this.state.photos.length;
        var myRandom = Math.floor(Math.random() * myCount)
        var myPath = this.state.photos[myRandom]
        this.setState({
            randomImage: myPath
        })
    }

    render() {        
        console.log(this.state.randomImage)
        return (
            <div className="slideshow-container">
                <img src={this.state.randomImage.filepath} alt=" " />
            </div>
        )
    }
}
