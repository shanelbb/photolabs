import React from "react";
import PhotoList from "./components/PhotoList";
import "./App.scss";
import TopNavigation from "components/TopNavigationBar";

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className='App'>
      <TopNavigation />
      <PhotoList />
    </div>
  );
};

export default App;
