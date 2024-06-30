import { useEffect } from "react";
import { useState } from "react";
import ImageGallery from "react-image-gallery";
import errorImage from "../img/error-image-generic.png";
import HeadText from "./HeadText";
import PageBlock from "./PageBlock";
import setting from "../setting";

const getImages = (width, height) =>
  setting.galleryImageURLs.map((url) => ({
    original: url,
    thumbnail: url,
    originalHeight: `${height}px`,
    originalWidth: `${width}px`,
  }));

const GalleryBlock = () => {
  // let [playerSize, setPlayerSize] = useState({ width: 1024, height: 768 });
  let [images, setImages] = useState(getImages(1024, 768));

  const resizeHandler = () => {
    const [maxWidth, maxHeight] = [window.innerWidth, window.innerHeight - 260];
    let width, height;

    if (maxWidth / maxHeight > 1.5) {
      height = maxHeight;

      width = parseInt(height * 1.5);
    } else {
      width = maxWidth;

      height = parseInt(width / 1.5);
    }

    setImages(getImages(width, height));
  };

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    resizeHandler();

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <PageBlock class="gallery-block">
      <HeadText headType="pink-head" text="Gallery" />
      <div className="gallery-container">
        <ImageGallery
          items={images}
          autoPlay={true}
          onErrorImageURL={errorImage}
          // lazyLoad={true}
        />
      </div>
    </PageBlock>
  );
};

export default GalleryBlock;
