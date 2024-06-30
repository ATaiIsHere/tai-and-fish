import ImageBall from "./ImageBall";
import groom from "../img/bride_groom.jpg";
import bride from "../img/bride.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";
import setting from "../setting"

const AvatarRegion = () => (
  <div className="avatar-region" data-aos="fade-up" data-aos-duration="1000">
    <div className="avatar-with-name">
      <span className="name-man">{setting.brideGroom.chineseName}</span>
      <ImageBall class="avatar-man" src={groom} alt="" />
    </div>

    <div
      className="heart-ball centered-axis-x"
      style={{ position: "absolute" }}
    >
      <FavoriteIcon htmlColor="#F14E95" style={{}} />
    </div>

    <div className="avatar-with-name">
      <span className="name-woman">{setting.bride.chineseName}</span>
      <ImageBall class="avatar-woman" src={bride} alt="" />
    </div>
  </div>
);

export default AvatarRegion;
