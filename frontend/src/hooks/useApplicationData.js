import { useReducer, useEffect } from "react";

export const ACTIONS = {
    FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
    FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
    SET_PHOTO_DATA: "SET_PHOTO_DATA",
    SET_TOPIC_DATA: "SET_TOPIC_DATA",
    SELECT_PHOTO: "SELECT_PHOTO",
    DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
    CLOSE_PHOTO_DETAILS: "CLOSE_PHOTO_DETAILS",
    SET_ERROR: "SET_ERROR",
    SET_CURRENT_TOPIC: "SET_CURRENT_TOPIC",
    SET_PHOTOS_BY_TOPIC: "SET_PHOTOS_BY_TOPIC",
};

function reducer(state, action) {
    switch (action.type) {
        case ACTIONS.FAV_PHOTO_ADDED:
            return { ...state, favPhotoIds: [...state.favPhotoIds, action.payload] };
        case ACTIONS.FAV_PHOTO_REMOVED:
            return { ...state, favPhotoIds: state.favPhotoIds.filter(id => id !== action.payload) };
        case ACTIONS.SET_PHOTO_DATA:
            return { ...state, photos: action.payload, error: null };
        case ACTIONS.SET_TOPIC_DATA:
            return { ...state, topics: action.payload, error: null };
        case ACTIONS.SELECT_PHOTO:
            return { ...state, selectedPhoto: action.payload };
        case ACTIONS.CLOSE_PHOTO_DETAILS:
            return { ...state, selectedPhoto: null };
        case ACTIONS.SET_ERROR:
            return { ...state, error: action.payload };
        case ACTIONS.SET_CURRENT_TOPIC:
            return { ...state, currentTopic: action.payload };
        case ACTIONS.SET_PHOTOS_BY_TOPIC:
            return { ...state, photos: action.payload, error: null };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

const fetchData = async (url, actionType, dispatch) => {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        dispatch({ type: actionType, payload: data });
    } catch (error) {
        dispatch({ type: ACTIONS.SET_ERROR, payload: error.message });
    }
};

const useApplicationData = () => {
    const initialState = {
        photos: [],
        topics: [],
        favPhotoIds: [],
        selectedPhoto: null,
        error: null,
        currentTopic: null,
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetchData("/api/photos", ACTIONS.SET_PHOTO_DATA, dispatch);
        fetchData("/api/topics", ACTIONS.SET_TOPIC_DATA, dispatch);
    }, []);

    const toggleFavPhoto = photoId => {
        const actionType = state.favPhotoIds.includes(photoId) ? ACTIONS.FAV_PHOTO_REMOVED : ACTIONS.FAV_PHOTO_ADDED;
        dispatch({ type: actionType, payload: photoId });
    };

    const openModal = photo => dispatch({ type: ACTIONS.SELECT_PHOTO, payload: photo });
    const closeModal = () => dispatch({ type: ACTIONS.CLOSE_PHOTO_DETAILS });
    const fetchPhotosByTopic = async topicId => {
        await fetchData(`http://localhost:8001/api/topics/photos/${topicId}`, ACTIONS.SET_PHOTOS_BY_TOPIC, dispatch);
    };

    const setCurrentTopic = topicId => {
        dispatch({ type: ACTIONS.SET_CURRENT_TOPIC, payload: topicId });
        fetchPhotosByTopic(topicId);
    };

    return { state, updateToFavPhotoIds: toggleFavPhoto, onPhotoSelect: openModal, onClosePhotoDetailsModal: closeModal, setCurrentTopic };
};

export default useApplicationData;
