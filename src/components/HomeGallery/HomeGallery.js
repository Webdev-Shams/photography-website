import React, { useEffect, useState } from "react";

const HomeGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("img.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="boss">
      <div className="imgGallery" style={{ columns: 3, columnGap: 0 }}>
        {images.slice(0, 5).map((image, i) => (
          <a className="imgLink" href={image} target="_blank" rel="noreferrer">
            <img
              className="image"
              key={i}
              src={image}
              alt="pic"
              style={{ padding: 2.5 }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default HomeGallery;
