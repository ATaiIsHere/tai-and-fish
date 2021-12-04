import HeadText from "./HeadText";
import AvatarRegion from "./AvatarRegion";
import Timeline from "./Timeline/Timeline";

const StoryBlock = () => {
  return (
    <div className="story-block">
      <HeadText headType="story-head" text="Our Story" />
      <AvatarRegion />
      <Timeline />
    </div>
  );
};

export default StoryBlock;
