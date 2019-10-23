import React from "react";
import TopNav from "./components/TopNav/TopNav";
import BottomNav from "./components/BottomNav/BottomNav";
import Banner from './components/Banner/Banner'
import Carousel from "./components/Carousel/Carousel";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <TopNav />
        <BottomNav />
      </div>
      <Carousel />
      <div className="banner">
          <Banner />
      </div>
      
    </React.Fragment>
  );
}

export default App;
