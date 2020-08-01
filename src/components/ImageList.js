import React from 'react';
import ImageCard from './ImageCard'
import './ImageList.css';

const ImageList = (props) => {
    const imageArray =props.images.map((image) => {
        return <ImageCard image={image} key={image.id} />
    });
    return <div className="image-list" >{imageArray}</div>;
};

export default ImageList;