import React, { createContext, useState } from "react";

export const FavPhotosContext = createContext();

export const FavPhotosProvider = ({ children }) => {
    const [favPhotos, setFavPhotos] = useState([]);

    const toggleFavPhoto = photo => {
        setFavPhotos(prevFavPhotos => {
            const isFav = prevFavPhotos.some(fav => fav.id === photo.id);
            return isFav ? prevFavPhotos.filter(fav => fav.id !== photo.id) : [...prevFavPhotos, photo];
        });
    };

    return <FavPhotosContext.Provider value={{ favPhotos, toggleFavPhoto }}>{children}</FavPhotosContext.Provider>;
};
