import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import { FavPhotosProvider } from "globalState/FavPhotosContext";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
    const {
        state: { photos, topics, favPhotoIds, selectedPhoto },
        onPhotoSelect,
        updateToFavPhotoIds,
        onClosePhotoDetailsModal,
        setCurrentTopic,
    } = useApplicationData();

    // Get favorite photos
    const favoritePhotos = photos.filter(photo => favPhotoIds.includes(photo.id));

    return (
        <FavPhotosProvider>
            <HomeRoute photos={photos} topics={topics} toggleFavPhoto={updateToFavPhotoIds} favPhotos={favoritePhotos} openModal={onPhotoSelect} onTopicSelect={setCurrentTopic} />
            {selectedPhoto && <PhotoDetailsModal photo={selectedPhoto} closeModal={onClosePhotoDetailsModal} openModal={onPhotoSelect} />}
        </FavPhotosProvider>
    );
};

export default App;
