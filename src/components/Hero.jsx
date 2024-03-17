import "../Hero.css";
import Button from "./Button";

const openInNewTab = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Hero = () => (
  <div className="mx-4 lg:mx-[230px] mb-[106px] mt-[7px] h-auto sm:w-auto min-h-[75vh] justify-center content-center bg-fuchsia-300 border-4 border-black hero-container">
    <div className="hero-content flex justify-center items-center flex-col -mt-[1rem]">
      <img
        src={process.env.PUBLIC_URL + "/images/logos/gemini_logo.svg"}
        alt="hero"
        className="content-center justify-center h-[154px] w-[418px]"
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
      <div className="flex items-center justify-between rounded-full bg-white h-[4vh] w-[44vw] mt-[4vh] border-[1pt] border-black drop-shadow-md px-4">
        <img
          src={process.env.PUBLIC_URL + "/images/icons/search_icon.svg"}
          alt="Search"
          className="h-[2vh]"
        />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent border-none outline-none flex-grow mx-4"
        />
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
        <Button onClick={() => openInNewTab("https://tally.so/r/w2eB7j")}>
          Apply!
        </Button>
        <Button onClick={() => openInNewTab("https://perchance.org/famous-scientist")} >
          I'm Feeling Lucky
        </Button>
      </div>
    </div>
  </div>
);

export default Hero;
