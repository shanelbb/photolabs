import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({sampleData}) => {
  const {id, imageSource, profile, username, location} = sampleData;
  return (
    <article className='photo-list__item' key={id}>
      <img src={imageSource} alt={"photo by " + username} className='photo-list__image' />
      <div className='photo-list__user-details'>
        <img src={profile} alt={username + " profile photo"} className='photo-list__user-profile' />
        <div>
          <h3 className='photo-list__user-info'>{username}</h3>
          <p className='photo-list__user-location'>
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </article>
  );
};

export default PhotoListItem;
