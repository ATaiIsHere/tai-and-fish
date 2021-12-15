import React, { useEffect, useState } from "react";
import LeftTimeDisplay from "./LeftTimeDisplay";
import PageBlock from "./PageBlock";

const TopBlock = () => {
  const target = new Date("2021/12/19 12:30:00");
  const getMaritalStatus = () => {
    return target > new Date()
      ? "We Are Getting Married"
      : "We Are Married";
  };

  const [maritalStatus, setMaritalStatus] = useState(getMaritalStatus());

  useEffect(() => {
    let repeat = setInterval(() => {
      setMaritalStatus(getMaritalStatus());
    }, 1000);

    return () => {
      clearInterval(repeat);
    };
  });
  return (
    <PageBlock class="top-block">
      <div
        className="top-block-content"
        data-aos="zoom-in"
        data-aos-duration="700"
      >
        <h1 className="block-title white-text">{"ATai & Fish"}</h1>
        <h2 className="block-text white-text">{maritalStatus}</h2>
        <LeftTimeDisplay target={target} />
      </div>
    </PageBlock>
  );
};

export default TopBlock;
