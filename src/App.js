import React from "react";
import TopNav from "./components/TopNav/TopNav";
import BottomNav from "./components/BottomNav/BottomNav";
import Banner from "./components/Banner/Banner";
import Button from './components/button/button';
import IphoneBanner from './components/IphoneBanner/IphoneBanner'
import "./App.css";
import FourColGrid from "./components/FourColGrid/FourColGrid";

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <TopNav />
        <BottomNav />
      </div>
      {/* <div className="row">
        <Carousel />
      </div> */}
      <div className="row">
        <Banner />
      </div>
      <div className="row">
        <div className="container">
          <FourColGrid />
        </div>
      </div>
      <div className="row">
        <Button class="btn btn-solid-blue" text="Load More" />
      </div>
      <div className="row">
      
      </div>
    </React.Fragment>
  );
}

export default App;
