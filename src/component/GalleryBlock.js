import ImageGallery from "react-image-gallery";
import errorImage from "../img/error-image-generic.png";
import HeadText from "./HeadText";
import PageBlock from "./PageBlock";
const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const GalleryBlock = () => {
  return (
    <PageBlock class="gallery-block">
      <HeadText headType="pink-head" text="Gallery" />
      <ImageGallery
        items={images}
        autoPlay={true}
        onErrorImageURL={errorImage}
        lazyLoad={true}
      />
    </PageBlock>
  );
};

export default GalleryBlock;
