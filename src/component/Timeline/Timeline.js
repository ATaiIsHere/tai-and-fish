import EventCard from "./EventCard";
import EventPhote1 from "../../img/event1.jpg";
import EventPhote2 from "../../img/event2.jpg";
import EventPhote3 from "../../img/event3.jpg";
import EventPhote4 from "../../img/event4.jpg";
import EventPhote5 from "../../img/event5.jpg";
import EventPhote6 from "../../img/top_bg.jpg";

const Timeline = () => (
  <div className="timeline">
    <div className="line" data-aos="zoom-in" data-aos-duration="700"></div>
    <EventCard side="left" photo={EventPhote1} title="相遇" date="NOVEMBER, 2018" msg=""></EventCard>
    <EventCard side="right" photo={EventPhote1} title="第一次約會 - 無敵破壞王2" date="NOVEMBER 29, 2018" msg=""></EventCard>
    <EventCard side="left" photo={EventPhote2} title="Fish 生日" date="DECEMBER 3, 2018" msg=""></EventCard>
    <EventCard side="right" photo={EventPhote3} title="正式交往" date="DECEMBER 9, 2018" msg=""></EventCard>
    <EventCard side="left" photo={EventPhote4} title="提親" date="FEBRUARY 28, 2021" msg=""></EventCard>
    <EventCard side="right" photo={EventPhote5} title="結婚登記" date="MAY 25, 2021" msg=""></EventCard>
    <EventCard side="left"  title="?" date="DECEMBER 3, 2021" msg=""></EventCard>
    <EventCard side="right" photo={EventPhote6} title="喜宴" date="DECEMBER 19, 2021" msg=""></EventCard>
  </div>
);

export default Timeline;
