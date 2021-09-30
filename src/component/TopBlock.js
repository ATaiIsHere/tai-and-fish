import React from "react";
import LeftTimeDisplay from "./LeftTimeDisplay";
import logo from "../img/logo.svg";
import { useState } from "react";
import PageBlock from "./PageBlock";

const getPageHeight = () => document.body.offsetHeight;

const TopBlock = () => {
  const [pageHeight, setPageHeight] = useState(getPageHeight());

  let changeBlockHeight = () => setPageHeight(getPageHeight());

  window.addEventListener("resize", changeBlockHeight);

  return (
    <PageBlock class="top-block">
      <img className="logo" src={logo} alt="logo" />
      <h1 className="block-title white-text">{"ATai & Fish"}</h1>
      <h2 className="block-text white-text">We Are Getting Married</h2>
      <LeftTimeDisplay target={new Date("2021/12/19 12:00:00")} />
    </PageBlock>
  );
};

export default TopBlock;
