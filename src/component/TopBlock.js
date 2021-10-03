import React from "react";
import LeftTimeDisplay from "./LeftTimeDisplay";
import PageBlock from "./PageBlock";

const TopBlock = () => {
  return (
    <PageBlock class="top-block">
      <h1 className="block-title white-text">{"ATai & Fish"}</h1>
      <h2 className="block-text white-text">We Are Getting Married</h2>
      <LeftTimeDisplay target={new Date("2021/12/19 12:00:00")} />
    </PageBlock>
  );
};

export default TopBlock;
