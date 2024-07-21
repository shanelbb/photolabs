import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import {useState, useEffect} from "react";
import photoData from "mocks/photos";
import topicData from "mocks/topics";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const [favPhotos, setFavPhotos] = useState([]);

  useEffect(() => {
    // Simulate asynchronous fetching of photos data
    setTimeout(() => {
      setPhotos(photoData);
    }, 5);

    // Simulate asynchronous fetching of topics data
    setTimeout(() => {
      setTopics(topicData);
    }, 5);
  }, []);

  const toggleFavPhoto = () => {};

  return (
    <div className='App'>
      <HomeRoute key={photos.id} topics={topics} photos={photos} toggleFavPhoto={toggleFavPhoto} favPhotos={favPhotos} />
    </div>
  );
};

export default App;
