import React, { useState } from "react";
import "./css/App.css";
import "./css/index.css";
import TopBlock from "./component/TopBlock";
import MidBlock from "./component/MidBlock";

const APP = () => {
  const [currentPage, setCurrentPage] = useState(0);

  let preScrollTop = 0;
  let activeInterval = null;

  const runStopChecker = () => {
    if (activeInterval === null) {
      const scrollStopChecker = setInterval(() => {
        if (document.documentElement.scrollTop === preScrollTop) {
          if (document.documentElement.scrollTop % window.innerHeight !== 0) {
            changePage(currentPage);
          } else {
            clearInterval(scrollStopChecker);
            activeInterval = null;
            console.log("scroll stop");
            runChangeChecker();
          }
        }

        console.log("...");
        preScrollTop = document.documentElement.scrollTop;
      }, 100);

      activeInterval = scrollStopChecker;
    }
  };

  const runChangeChecker = () => {
    if (activeInterval === null) {
      const scrollChangeChecker = setInterval(() => {
        if (document.documentElement.scrollTop !== preScrollTop) {
          let page = currentPage;

          if (document.documentElement.scrollTop > preScrollTop) {
            page += 1;
          } else {
            page -= 1;
          }
          setCurrentPage(page);
          changePage(page);

          clearInterval(scrollChangeChecker);
          console.log("scroll");
          runStopChecker();
        }
        console.log("...");
        preScrollTop = document.documentElement.scrollTop;
      }, 100);

      activeInterval = scrollChangeChecker;
    }
  };

  const changePage = (page) => {
    document.documentElement.scrollTop = page * window.innerHeight;
  };

  runStopChecker();

  return (
    <div id="app">
      <TopBlock />
      <MidBlock />
      <TopBlock />
    </div>
  );
};

export default APP;
