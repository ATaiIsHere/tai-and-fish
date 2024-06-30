import React, { useEffect, useState } from "react";
import LeftTimeDisplay from "./LeftTimeDisplay";
import PageBlock from "./PageBlock";
import setting from "../setting";

const TopBlock = () => {
  const target = setting.targetTime;
  const getContent = () => {
    return target > new Date()
      ? {maritalStatus: "We Are Getting Married", backgroundClass: "top-block-pre", fontSize: ""}
      : {maritalStatus:"We Are Married", backgroundClass: "top-block-post", fontSize: "text-size-post"};
  };
  
  const [content, setContent] = useState(getContent());

  useEffect(() => {
    let repeat = setInterval(() => {
      setContent(getContent());
    }, 1000);

    return () => {
      clearInterval(repeat);
    };
  });
  return (
    <PageBlock class={`top-block ${content.backgroundClass}`}>
      <div
        className="top-block-content"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <h1 className="block-title white-text">{`${setting.brideGroom.englishName} & ${setting.bride.englishName}`}</h1>
        <h2 className={`block-text white-text ${content.fontSize}`}>{content.maritalStatus}</h2>
        <LeftTimeDisplay target={target} />
      </div>
    </PageBlock>
  );
};

export default TopBlock;
