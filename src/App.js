import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovingObjects from './components/MovingObjects';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FF73A9", height: "100vh", position: "relative" }}>
      <div>
      <Header />
      <Hero />
      <MovingObjects />
      </div>
      <div className="h-[100vh]">
      </div>
    </div>
  );
}

export default App;
