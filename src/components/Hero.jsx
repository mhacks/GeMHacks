import { useState, useEffect } from "react";
import "../Hero.css";
import Button from "./Button";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Appril 12th - 14th, 2024";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Open a random site
  const openRandomSite = () => {
    const sites = [
      "https://medium.com/hackathon-hackers/mhacks-from-dream-to-reality-32e2e55e8136",
      "https://news.mlh.io/tag/mhacks",
      "https://mhacks.tumblr.com/",
      "https://www.forbes.com/sites/amitchowdhry/2013/02/06/mhacks-at-the-university-of-michigan-was-the-largest-student-run-hackathon/?sh=3bf8e0073592",
      "https://obamawhitehouse.archives.gov/photos-and-video/photo/2013/09/university-michigans-mhacks-hackathon",
      "https://www.michigandaily.com/uncategorized/inside-mhacks/",
      "https://cse.engin.umich.edu/stories/mhacks-ai-powered-interior-design-assistant-wins-midwests-largest-student-run-hackathon",
      "https://cse.engin.umich.edu/stories/cs-students-revive-mhacks-legacy",
      "https://www.instagram.com/mhacks_/",
      "https://ai.google.dev/?gad_source=1&gclid=CjwKCAjwzN-vBhAkEiwAYiO7oFz6lPt7ZGW4aDs6jMtOIheTu-x78z71s9H2dAznxeEh-COVzZny0RoCJqQQAvD_BwE",
      "https://www.google.com/about/",
      "https://about.google/belonging/"
    ];

    let randomIndex = Math.floor(Math.random() * sites.length);
    openInNewTab(sites[randomIndex]);
  };

  return (
  <div className="mx-4 lg:mx-[230px] mb-[106px] mt-[7px] h-auto sm:w-auto min-h-[75vh] justify-center content-center bg-fuchsia-300 border-4 border-black hero-container bg-opacity-95">
    <div className="hero-content flex justify-center items-center flex-col -mt-[1rem]">
      <img
        src={process.env.PUBLIC_URL + "/images/logos/google_hero_logo.webp"}
        alt="hero"
        className="content-center justify-center h-auto sm:w-[30vw] w-[60vw]"
        style={{ filter: "drop-shadow(3px 4px 0px #000)" }}
      />
      <img
        src={process.env.PUBLIC_URL + "/images/icons/x.svg"}
        alt="separator"
        className="mt-2 mb-[-2] content-center justify-center h-[80px] w-[80px]"
      />
      <div className="flex flex-row items-center justify-center gap-1">
        <img
          src={process.env.PUBLIC_URL + "/images/icons/mhacks_splash.svg"}
          alt="M logo"
          className="h-[58px] w-[63px] drop-shadow-md"
        />
        <div className="text-white text-[67px] font-bold font-['Neutral Face'] uppercase my-0 element-opacity-map drop-shadow-md">
          Hacks
        </div>
      </div>
      <div className="flex items-center justify-between rounded-full bg-white h-[6vh] sm:w-[44vw] w-[80vw] mt-[4vh] border-[1pt] border-black drop-shadow-md px-4">
        <img
          src={process.env.PUBLIC_URL + "/images/icons/search_icon.svg"}
          alt="Search"
          className="h-[2vh]"
        />
        <div className="bg-transparent border-none outline-none flex-grow mx-4 text-black font-bold text-lg">
          {typedText}
        </div>
        <div className="w-[25px] h-[25px] relative">
          <div
            className="h-2 w-2 bg-red-500 rounded-full absolute"
            style={{ top: "8px", left: "16px" }}
          ></div>
          <div
            className="h-1 w-1 bg-green-500 rounded-full absolute"
            style={{ top: "8px", left: "25px" }}
          ></div>
          <div
            className="h-4 w-4 bg-blue-500 rounded-full absolute"
            style={{ top: "0px", left: "0px" }}
          ></div>
          <div
            className="h-2 w-2 bg-yellow-500 rounded-full absolute"
            style={{ top: "17px", left: "16px" }}
          ></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-2 gap-4 content-center justify-center mt-10">
        <Button
          onClick={() => {
            openInNewTab('https://safe-banon-80d.notion.site/Hacker-Guide-079b584c6deb446e88c53712dc0f9ecb')
          }}
        >
          Hacker Guide
        </Button>
        <Button onClick={openRandomSite} >
          I'm Feeling Lucky
        </Button>
      </div>
    </div>
  </div>
  );
  };

export default Hero;
