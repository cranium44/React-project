import React from 'react';
import TopNav from './components/TopNav/TopNav'
import BottomNav from './components/BottomNav/BottomNav'
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <TopNav />
        <BottomNav />
      </div>
    </React.Fragment>
  );
}

export default App;
