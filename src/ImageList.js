import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        console.log(this.props.imageData);
        return (
            <ul>
                {
                    this.props.imageData.map(imageObject => {
                        return <ImageItem key={imageObject.title} imageObject={imageObject} />
                    })
                }

            </ul>
        )
    }
}
