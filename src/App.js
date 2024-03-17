import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovingObjects from './components/MovingObjects';
import Accordion from "./components/Accordian";
import Marquee from "./components/Marquee";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FF73A9", height: "100vh", position: "relative" }}>
      <div>
      <Header />
      <Hero />
      <MovingObjects />
    
      <div className="flex flex-col min-h-screen justify-between">
      <Marquee items={["Google x MHacks", "Google x MHacks", "Google x MHacks"]} />
      <h1 id='about' className="text-4xl font-syncopate font-bold pt-10 px-20">About</h1>
      <h1 className="text-4xl font-syncopate font-bold px-20">Google x MHacks</h1>
      <p className="px-20 py-10 font-bold font-inter">Google x MHacks is a 24-hour hackathon hosted by Google and MHacks.</p>

      <div className="flex flex-col items-center justify-center">
        <h1 id='faq' className="text-4xl font-syncopate font-bold">FAQS</h1>
        <Accordion className="m-4" question="What is Google x MHacks?" answer="Placeholder." />
        <Accordion className="m-4" question="How Many Can Be on a Team?" answer="Hackers may form teams of up to 4 people. Teams can be formed before or during the event." />
        <Accordion className="m-4" question="What is MHacks x Google?" answer="Placeholder." />
        <Accordion className="m-4" question="What is MHacks x Google?" answer="Placeholder." />
        <button className="flex cursor-pointer items-center mt-20 mb-20 rounded-md border-2 border-black bg-blue-400 px-10 py-3 font-bold font-archivo shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">Apply Now</button>
      </div>
      <footer className="w-full font-bold font-archivo text-center border-t border-grey p-4 pin-b bg-purple-200 text-black">
        &copy; 2024 MHacks
      </footer>
      </div>
    
      </div>
      <div className="h-[100vh]">
      </div>
    </div>
  );
}

export default App;