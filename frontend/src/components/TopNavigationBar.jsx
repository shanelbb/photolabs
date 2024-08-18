import React, { useContext, useEffect, useState } from "react";
import { FavPhotosContext } from "globalState/FavPhotosContext";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";
import "../styles/TopNavigationBar.scss";

const TopNavigationBar = ({ topics, onTopicSelect }) => {
    const { favPhotos } = useContext(FavPhotosContext);
    const [notification, setNotification] = useState(false);

    useEffect(() => {
        if (favPhotos.length > 0) {
            setNotification(true);
            const timer = setTimeout(() => setNotification(false), 1000);
            return () => clearTimeout(timer);
        }
    }, [favPhotos]);

    return (
        <div className='top-nav-bar'>
            <span className='top-nav-bar__logo'>PhotoLabs</span>
            <TopicList topics={topics} onTopicSelect={onTopicSelect} />
            <FavBadge isFavPhotoExist={favPhotos.length > 0} notification={notification || favPhotos.length > 0} />
        </div>
    );
};

export default TopNavigationBar;
