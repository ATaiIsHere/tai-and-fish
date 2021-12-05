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
  // let currentPage = 0;
  // let lastScrollDirection;
  // let prevScrollPosition = document.documentElement.scrollTop;

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  // const WheelListener = (event) => {
  //   if (event.deltaY > 0) {
  //     lastScrollDirection = 'down';
  //   } else {
  //     lastScrollDirection = 'up';
  //   }
  // };

  // let startY = null;

  // const TouchStartListener = (event) => {
  //   startY = event.changedTouches[0].pageY;
  // };

  // const TouchEndListener = (event) => {
  //   let endY = event.changedTouches[0].pageY;
  //   if (endY - startY > 0) {
  //     lastScrollDirection = 'up';
  //   } else if (startY - endY > 0) {
  //     lastScrollDirection = 'down';
  //   }
  // };

  // setInterval(() => {
  //   if (prevScrollPosition === document.documentElement.scrollTop) {
  //     document.documentElement.scrollTop = currentPage * window.innerHeight;
  //   }
  //   prevScrollPosition = document.documentElement.scrollTop;
  // }, 100);

  // const scrollHandler = () => {
  //   console.log('scroll');
  //   let scrollPosition = document.documentElement.scrollTop;
  //   let page = scrollPosition / window.innerHeight;
  //   let remainder = scrollPosition % window.innerHeight;
  //   if (remainder === 0) {
  //     return
  //   }

  //   if (lastScrollDirection === "up") {
  //     page = Math.ceil(page) - 1;
  //   } else if (lastScrollDirection === "down"){
  //     page = Math.floor(page) + 1;
  //   }
  //   console.log(scrollPosition, page);

  //   setPage(page);
  // };

  // const setPage = (page) => {
  //   currentPage = page;
  // }

  // document.addEventListener('scroll', scrollHandler);

  return (
    <div
      id="app"
      // onWheel={WheelListener}
      // onTouchStartCapture={TouchStartListener}
      // onTouchEnd={TouchEndListener}
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
