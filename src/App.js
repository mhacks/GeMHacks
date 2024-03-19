import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MovingObjects from './components/MovingObjects';
import Accordion from "./components/Accordian";
import Marquee from "./components/Marquee";
import Prizes from './components/Prizes';

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FF73A9", height: "100vh", position: "relative" }}>
      <div>
      <Header />
      <Hero />
      <MovingObjects />
    
      <div className="flex flex-col min-h-screen justify-between">
      <Marquee items={["Google x MHacks", "Google x MHacks", "Google x MHacks"]} />
      <h1 className="text-4xl font-syncopate font-bold pt-10 px-20">About</h1>
      <h1 className="text-4xl font-syncopate font-bold px-20">Google x MHacks</h1>
      <p className="px-20 py-10 font-medium font-inter">

      MHacks is the University of Michigan's premier student-run hackathon. <span className="font-bold">This April 12th to 14th</span>, we are collaborating with Google to host Google x MHacks, the Google AI Hackathon, at the Google Ann Arbor Office. A few workshops, led by Google engineers and PMs, will be hosted on Friday the 12th, while the hackathon will take place Saturday and Sunday. 
      
      <br/> <br/>
      Participants will get <span className="font-bold">exclusive early-access</span> to <span className="font-bold">recently announced Gemini 1.5 API</span> along with a host of other Google AI Studio tools. Assorted tech talks and workshops accompany a few speakers you don't want to miss. Of course, hackathon swag will be plentiful, along with networking opportunities with Google employees and other students. Teams are of up to four, but acceptances are individual. The prize pool is as follows: first prize is $<span className="font-bold">3000</span>, second prize is $<span className="font-bold">1500</span>, and third prize is $<span className="font-bold">500</span>. 
      <br/> <br/>

      Food is provided, but there will be no overnight accommodations. Please apply by <span className="font-bold">March 29th, 11:59pm</span>; note that we will be reviewing applications on a <span className="font-bold">rolling basis</span> so our deadline may close earlier as slots fill up.
      </p>

      <Prizes id="prizes"/>

      

      <div className="mt-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-syncopate font-bold">FAQS</h1>
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