import ImageBall from "./ImageBall";
import tai from "../img/tai.jpg";
import fish from "../img/fish.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AvatarRegion = () => (
  <div className="avatar-region" data-aos="fade-up" data-aos-duration="1000">
    <div className="avatar-with-name">
      <span className="name-man">戴佑亘</span>
      <ImageBall class="avatar-man" src={tai} alt="" />
    </div>

    <div
      className="heart-ball centered-axis-x"
      style={{ position: "absolute" }}
    >
      <FavoriteIcon htmlColor="#F14E95" style={{}} />
    </div>

    <div className="avatar-with-name">
      <span className="name-woman">鄒瑜　</span>
      <ImageBall class="avatar-woman" src={fish} alt="" />
    </div>
  </div>
);

export default AvatarRegion;
