const EventCard = (props) => (
  <div className={`event-card ${props.side}`} data-aos="zoom-in" data-aos-duration="700">
    <div className="event-photo" style={{backgroundImage: `url(${props.photo})`}}></div>
    <div className="event-msg">
      <div>{props.title}</div>
      <div>{props.date}</div>
      <div>{props.msg}</div>
    </div>
  </div>
);

export default EventCard;