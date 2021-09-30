// import React, { useState } from "react";
import "./css/App.css";
import "./css/index.css";
import TopBlock from "./component/TopBlock";
import MidBlock from "./component/MidBlock";

const APP = () => {
  // const [scrollPosition, setScrollPosition] = useState(0);

  // const changePage = () => {
  //   window.removeEventListener("scroll", changePage);
  //   let currentScrollPosition = ;
  //   let currentPageHeight = window.innerHeight;

  //   let goPage = Math.ceil(currentScrollPosition / currentPageHeight);
  //   document.documentElement.scrollTop = goPage * currentPageHeight;
  // };

  // window.addEventListener("scroll", changePage);

  return (
    <div id="app">
      <TopBlock />
      <MidBlock />
      <TopBlock />
    </div>
  );
};

export default APP;
