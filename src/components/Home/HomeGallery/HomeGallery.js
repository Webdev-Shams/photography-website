import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HomeGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("img.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <div className="text-center mb-9">
      <h1 className="mt-9 mb-9 text-5xl md:text-6xl text-white font-light text-center">My Clicks</h1>
      <div className="imgGallery" style={{ columns: 3, columnGap: 0 }}>
        {images.slice(0, 5).map((image, i) => (
          <a key={i} className="imgLink" href={image} target="_blank" rel="noreferrer">
            <img
              className="image"
              src={image}
              alt="pic"
              style={{ padding: 2.5 }}
            />
          </a>
        ))}
      </div>
      <Link className="submitBtn" to="/gallery">See More</Link>
    </div>
  );
};

export default HomeGallery;
