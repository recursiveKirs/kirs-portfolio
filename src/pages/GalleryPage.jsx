import { useEffect, useState } from "react";
import { getImages } from "services/imageService";

import "./GalleryPage.css";

export const GalleryPage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    setImages(getImages());
  }, [getImages]);

  return (
    <div>
      <h1>Gallery</h1>
      <p>Some photos I took and thought looked neat.</p>
      <div className="gallery-container">
        {images.map((image) => {
          return <img src={image.imageUrl} className="gallery-image" />;
        })}
      </div>
    </div>
  );
};
