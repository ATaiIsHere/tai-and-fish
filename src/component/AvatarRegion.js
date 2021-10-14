import ImageBall from "./ImageBall";
import tai from "../img/tai.jpg";
import fish from "../img/fish.jpg";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AvatarRegion = () => (
  <div className="avatar-region" data-aos="fade-up" data-aos-duration="1000">
    <div
      style={{
        float: "left",
        lineHeight: "150px",
        fontFamily: "cwTeXYen",
        fontSize: "40px",
      }}
    >
      戴佑亘
    </div>
    <ImageBall src={tai} alt="" style={{ float: "right" }} />
    <div
      className="heart-ball centered-axis-x"
      style={{ position: "absolute" }}
    >
      <FavoriteIcon htmlColor="#F14E95" style={{}} />
    </div>
    <ImageBall src={fish} alt="" style={{ float: "left" }} />
    <div
      style={{
        fontSize: "40px",
        float: "right",
        lineHeight: "150px",
        fontFamily: "cwTeXYen",
      }}
    >
      鄒瑜　
    </div>
  </div>
);

export default AvatarRegion;
