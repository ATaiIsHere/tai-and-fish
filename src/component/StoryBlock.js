import HeadText from "./HeadText";
import AvatarRegion from "./AvatarRegion";
import Timeline from "./Timeline/Timeline";

const StoryBlock = () => {
  return (
    <div className="wedding-info-block">
      <HeadText text="Our Story" />
      <AvatarRegion />
      <Timeline />
    </div>
  );
};

export default StoryBlock;
