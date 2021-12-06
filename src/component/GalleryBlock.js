import ImageGallery from "react-image-gallery";
import errorImage from "../img/error-image-generic.png";
import HeadText from "./HeadText";
import PageBlock from "./PageBlock";

const imageURLs = [
  "https://i.imgur.com/Wrwezhf.jpg",
  "https://i.imgur.com/ogcP6DX.jpg",
  "https://i.imgur.com/7jFmL1W.jpg",
  "https://i.imgur.com/UJdFwGa.jpg",
  "https://i.imgur.com/vaxT2EJ.jpg",
  "https://i.imgur.com/4TQ9Ved.jpg",
  "https://i.imgur.com/76asfOn.jpg",
  "https://i.imgur.com/h1nlksS.jpg",
  "https://i.imgur.com/1LKAHBd.jpg",
  "https://i.imgur.com/khx3lZK.jpg",
  "https://i.imgur.com/mDrQ7p2.jpg",
  "https://i.imgur.com/aeBvfoz.jpg",
  "https://i.imgur.com/J7Beelo.jpg",
  "https://i.imgur.com/h88DY2D.jpg",
  "https://i.imgur.com/2rvzSwl.jpg",
  "https://i.imgur.com/09R7K7c.jpg",
  "https://i.imgur.com/in2HP9l.jpg",
  "https://i.imgur.com/eOmovtc.jpg",
  "https://i.imgur.com/Eobo5LB.jpg",
  "https://i.imgur.com/qIHsuxF.jpg",
  "https://i.imgur.com/PLHvCQ7.jpg",
  "https://i.imgur.com/DS5jVSD.jpg",
  "https://i.imgur.com/x9dPWWg.jpg",
  "https://i.imgur.com/hMeKqUk.jpg",
  "https://i.imgur.com/k6RsLWo.jpg",
  "https://i.imgur.com/F2eZOCK.jpg",
  "https://i.imgur.com/tMPjYTH.jpg",
  "https://i.imgur.com/OR2uHVl.jpg",
  "https://i.imgur.com/kohVVSe.jpg",
  "https://i.imgur.com/NeRbPJY.jpg",
  "https://i.imgur.com/Jd4nKZw.jpg",
  "https://i.imgur.com/IdXCDnD.jpg",
  "https://i.imgur.com/Wv0ORNo.jpg",
  "https://i.imgur.com/K3WHMqa.jpg",
  "https://i.imgur.com/LNwoqEt.jpg",
  "https://i.imgur.com/4TnBBL9.jpg",
  "https://i.imgur.com/GhXoeFU.jpg",
  "https://i.imgur.com/W4NhfIb.jpg",
  "https://i.imgur.com/vbUhass.jpg",
  "https://i.imgur.com/fJ9jr51.jpg",
  "https://i.imgur.com/Z9OjXSY.jpg",
  "https://i.imgur.com/UtL186Z.jpg",
  "https://i.imgur.com/KnVmj0V.jpg",
  "https://i.imgur.com/sFpOh0u.jpg",
  "https://i.imgur.com/jEDcsoy.jpg",
  "https://i.imgur.com/FZkarJn.jpg",
  "https://i.imgur.com/DO0QpHU.jpg",
  "https://i.imgur.com/dpgKDrM.jpg",
  "https://i.imgur.com/jRUq8hX.jpg",
  "https://i.imgur.com/6KmtN6Q.jpg",
  "https://i.imgur.com/dlyw1Te.jpg",
  "https://i.imgur.com/SyRsaSz.jpg",
  "https://i.imgur.com/StgRoJ3.jpg",
  "https://i.imgur.com/W9xN8yG.jpg",
  "https://i.imgur.com/IAzcrEu.jpg",
  "https://i.imgur.com/JmC7lSI.jpg",
  "https://i.imgur.com/j2muCHD.jpg",
  "https://i.imgur.com/QC4kh8R.jpg",
  "https://i.imgur.com/O8XZsoE.jpg",
  "https://i.imgur.com/bqXJKDI.jpg",
  "https://i.imgur.com/6ztkYrk.jpg",
  "https://i.imgur.com/JzdCbSA.jpg",
  "https://i.imgur.com/hyhtlHU.jpg",
  "https://i.imgur.com/zt00H4J.jpg",
  "https://i.imgur.com/mmjRvNM"
]
const images = imageURLs.map((url) => ({
  original: url,
  thumbnail: url,
  originalHeight: "768px",
  originalWidth: "1024px",
}));

const GalleryBlock = () => {
  return (
    <PageBlock class="gallery-block">
      <HeadText headType="pink-head" text="Gallery" />
      <div className="gallery-container">
        <ImageGallery
          items={images}
          autoPlay={true}
          onErrorImageURL={errorImage}
          lazyLoad={true}
        />
      </div>
    </PageBlock>
  );
};

export default GalleryBlock;
