import EventCard from "./EventCard";
import EventPhote1 from "../../img/event1.jpg";

const Timeline = () => (
  <div className="timeline">
    <div className="line" data-aos="zoom-in" data-aos-duration="700"></div>
    <EventCard photo={EventPhote1} msg="TEST MSG"></EventCard>
  </div>
);

export default Timeline;
