import React from "react";
import PropTypes from "prop-types";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, favPhotos, openModal }) => (
    <div className='photo-list'>
        {photos.map(photo => (
            <PhotoListItem key={photo.id} photo={photo} isFav={favPhotos.some(favPhoto => favPhoto.id === photo.id)} openModal={openModal} />
        ))}
    </div>
);

PhotoList.propTypes = {
    photos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
    favPhotos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        })
    ).isRequired,
    openModal: PropTypes.func.isRequired,
};

export default PhotoList;
