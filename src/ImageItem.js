import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.imageObject.title} has {this.props.imageObject.horns} horns!</h4>
                <img src={this.props.imageObject.url} alt={this.props.imageObject.description} />
            </div>
        )
    }
}
