import AOS from "aos";
import { useEffect } from "react";
import BlessingBlock from "./component/BlessingBlock";
import GalleryBlock from "./component/GalleryBlock";
// import MidBlock from "./component/MidBlock";
import StoryBlock from "./component/StoryBlock";
import TopBlock from "./component/TopBlock";
import "./css/aos.css";
import "./css/App.css";
import "./css/index.css";
import logo from "./img/logo.svg";

const APP = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div
      id="app"
    >
      <img className="logo" src={logo} alt="logo" />
      <TopBlock />
      <StoryBlock />
      <BlessingBlock />
      <GalleryBlock />
    </div>
  );
};

export default APP;
