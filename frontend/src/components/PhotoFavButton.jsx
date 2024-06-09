import React, {useCallback, useState} from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = () => {
  const [userFav, setUserFav] = useState(false);

  const handleFav = () => {
    if (!userFav) {
      setUserFav(true);
      return;
    }
    setUserFav(false);
  };
  return (
    <div className='photo-list__fav-icon' onClick={handleFav}>
      <div className='photo-list__fav-icon-svg'>
        <FavIcon selected={userFav} />
      </div>
    </div>
  );
};

export default PhotoFavButton;
