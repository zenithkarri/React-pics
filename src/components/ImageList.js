import React from 'react';
import './ImageList.css';

const ImageList = (props) => {
    const imageArray =props.images.map((image) => {
        return <img alt={image.description} key={image.id} src={image.urls.regular} />
    });
    return <div className="image-list" >{imageArray}</div>;
};

export default ImageList;