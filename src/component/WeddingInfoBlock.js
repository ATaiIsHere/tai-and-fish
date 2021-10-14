import PageBlock from "./PageBlock";
import ImageBall from "./ImageBall";

import tai from "../img/tai.jpg";
import fish from "../img/fish.jpg";

const WeddingInfoBlock = () => {
  return (
    <PageBlock class="wedding-info-block">
      <div className="avatar-region" >
        <span data-aos="fade-up" data-aos-duration="1000" style={{lineHeight: '150px', fontFamily: "cwTeXYen"}}>戴佑亘</span>
        <ImageBall src={tai} alt="" />
        <ImageBall src={fish} alt="" />
        <span style={{lineHeight: '150px', fontFamily: "cwTeXYen"}}>鄒瑜</span>
      </div>
    </PageBlock>
  );
};

export default WeddingInfoBlock;
