const EventCard = (props) => (
  <div className="event-card" data-aos="zoom-in" data-aos-duration="700">
    <div className="event-photo" style={{backgroundImage: `url(${props.photo})`}}></div>
    <div className="event-msg">
      <div>First We Meet</div>
      <div>DECEMBER 25, 2015</div>
      <div>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.{props.msg}</div>
    </div>
  </div>
);

export default EventCard;