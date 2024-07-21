import React from "react";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import "../styles/HomeRoute.scss";

const HomeRoute = props => {
  const {photos, topics, toggleFavPhoto, favPhotos} = props;
  return (
    <div className='home-route'>
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} toggleFav={toggleFavPhoto} favPhotos={favPhotos} />
    </div>
  );
};

export default HomeRoute;
