import ReactPlayer from "react-player";
import HeadText from "./HeadText";
import PageBlock from "./PageBlock";

const BlessingBlock = () => {
  return (
    <PageBlock class="blessing-block">
      <HeadText headType="white-head" text="Blessing" />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=BABn1z4nfew"
        width="100%"
        height="56vw"
        style={{ maxWidth: "1024px", maxHeight: "576px", zIndex: 99 }}
      />
    </PageBlock>
  );
};

export default BlessingBlock;
