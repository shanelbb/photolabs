import React from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import {FavPhotosProvider} from "globalState/FavPhotosContext";
import useApplicationData from "hooks/useApplicationData";

const App = () => {
  const {
    state: {photos, topics, favPhotoIds, selectedPhoto},
    onPhotoSelect,
    updateToFavPhotoIds,
    onClosePhotoDetailsModal,
  } = useApplicationData();

  return (
    <FavPhotosProvider>
      <HomeRoute photos={photos} topics={topics} toggleFavPhoto={updateToFavPhotoIds} favPhotos={photos.filter(photo => favPhotoIds.includes(photo.id))} openModal={onPhotoSelect} />
      {selectedPhoto && <PhotoDetailsModal photo={selectedPhoto} closeModal={onClosePhotoDetailsModal} toggleFavPhoto={updateToFavPhotoIds} favPhotos={photos.filter(photo => favPhotoIds.includes(photo.id))} openModal={onPhotoSelect} />}
    </FavPhotosProvider>
  );
};

export default App;
