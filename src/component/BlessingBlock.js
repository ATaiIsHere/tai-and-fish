import HeadText from "./HeadText";
import AvatarRegion from "./AvatarRegion";
import Timeline from "./Timeline/Timeline";
import ReactPlayer from "react-player";
import zIndex from "@material-ui/core/styles/zIndex";

const BlessingBlock = () => {
  return (
    <div className="blessing-block">
      <HeadText headType="blessing-head" text="Blessing" />
      <ReactPlayer url='https://www.youtube.com/watch?v=HgzGwKwLmgM' width="2000px" height="1000px" style={{zIndex: 99}} />
    </div>
  );
};

export default BlessingBlock;
