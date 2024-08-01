import {useReducer, useEffect} from "react";
import photosData from "mocks/photos";
import topicsData from "mocks/topics";

// Define the actions
export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
};

// Create the reducer function
const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favPhotoIds: [...state.favPhotoIds, action.payload],
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload),
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photos: action.payload,
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topics: action.payload,
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      selectedPhoto: action.payload,
    };
  case ACTIONS.CLOSE_PHOTO_DETAILS:
    return {
      ...state,
      selectedPhoto: null,
    };
  default:
    throw new Error(`Tried to reduce with unsupported action type: ${action.type}`);
  }
};

// Implement the useApplicationData hook
const useApplicationData = () => {
  const initialState = {
    photos: [],
    topics: [],
    favPhotoIds: [],
    selectedPhoto: null,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: photosData});
    dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: topicsData});
  }, []);

  const toggleFavPhoto = photoId => {
    if (state.favPhotoIds.includes(photoId)) {
      dispatch({type: ACTIONS.FAV_PHOTO_REMOVED, payload: photoId});
    } else {
      dispatch({type: ACTIONS.FAV_PHOTO_ADDED, payload: photoId});
    }
  };

  const openModal = photo => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: photo});
  };

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_PHOTO_DETAILS});
  };

  return {
    state,
    updateToFavPhotoIds: toggleFavPhoto,
    onPhotoSelect: openModal,
    onClosePhotoDetailsModal: closeModal,
  };
};

export default useApplicationData;
