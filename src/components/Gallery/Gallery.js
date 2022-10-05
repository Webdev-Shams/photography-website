import React, { useEffect, useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("img.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);
  return (
    <div>
      <h1 className="pt-32 mb-9 text-6xl text-white font-light text-center">My Clicks</h1>
      <div className="imgGallery" style={{ columns: 4, columnGap: 0 }}>
      {images.map((image, i) => (
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

export default Gallery;
