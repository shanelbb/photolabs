import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";

const PhotoList = ({photos}) => {
  return (
    <ul className='photo-list'>
      {photos.map(photo => {
        return <PhotoListItem sampleData={photo} key={photo.id} />;
      })}
    </ul>
  );
};

export default PhotoList;
