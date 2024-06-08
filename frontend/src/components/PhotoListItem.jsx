import React from "react";
import "../styles/PhotoListItem.scss";

const PhotoListItem = ({sampleData}) => {
  console.log(sampleData);
  const {urls, user, location} = sampleData;
  return (
    <li className='photo-list__item'>
      <img src={urls.regular} alt={"photo by " + user.name} className='photo-list__image' />
      <div className='photo-list__user-details'>
        <img src={user.profile} alt={user.name + " profile photo"} className='photo-list__user-profile' />
        <div>
          <h3 className='photo-list__user-info'>{user.name}</h3>
          <p className='photo-list__user-location'>
            {location.city}, {location.country}
          </p>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
