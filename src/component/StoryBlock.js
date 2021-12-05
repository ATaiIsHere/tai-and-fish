import AvatarRegion from "./AvatarRegion";
import HeadText from "./HeadText";
import Timeline from "./Timeline/Timeline";

const StoryBlock = () => {
  return (
    <div className="story-block">
      <HeadText headType="pink-head" text="Our Story" />
      <AvatarRegion />
      <Timeline />
    </div>
  );
};

export default StoryBlock;
