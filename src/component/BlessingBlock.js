import { useState } from "react";
import { useEffect } from "react";
import ReactPlayer from "react-player";
import HeadText from "./HeadText";
import PageBlock from "./PageBlock";

const BlessingBlock = () => {
  let [playerSize, setPlayerSize] = useState({ width: 1024, height: 768 });

  const resizeHandler = () => {
    const [maxWidth, maxHeight] = [window.innerWidth, window.innerHeight - 260];
    let width, height;

    if (maxWidth / maxHeight > 1.77) {
      height = maxHeight > 576 ? 576 : maxHeight;
      width = parseInt(height * 1.77);
    } else {
      width = maxWidth > 1024 ? 1024 : maxWidth;
      height = parseInt(width / 1.77);
    }

    setPlayerSize({ width, height });
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <PageBlock class="blessing-block">
      <HeadText headType="white-head" text="Blessing" />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=BABn1z4nfew"
        width={`${playerSize.width}px`}
        height={`${playerSize.height}px`}
        style={{ zIndex: 99 }}
      />
    </PageBlock>
  );
};

export default BlessingBlock;
