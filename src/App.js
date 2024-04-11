import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovingObjects from './components/MovingObjects';
import Marquee from "./components/Marquee";
import Prizes from './components/Prizes';
import About from './components/About';
import FAQ from './components/FAQ';
import ScrollToTop from "react-scroll-up";
import { FaArrowUp } from "react-icons/fa";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FF73A9", height: "100vh", position: "relative" }}>
      <div>
      <ParallaxProvider>
          <Header />
          <Hero />
          <MovingObjects />
      </ParallaxProvider>
    
      <div className="flex flex-col min-h-screen justify-between">
      <Marquee items={["Google x MHacks", "Google x MHacks", "Google x MHacks"]} />
      <About id="about"/>

      <Prizes id="prizes"/>
      <FAQ id="faq"/>
      <ScrollToTop showUnder={160}>
        <span><FaArrowUp /></span>
      </ScrollToTop>
      <footer className="w-full mt-12 font-bold font-archivo text-center border-t border-grey p-4 pin-b bg-purple-200 text-black">
        &copy; 2024 MHacks
      </footer>
      </div>
    
      </div>
    </div>
  );
}

export default App;