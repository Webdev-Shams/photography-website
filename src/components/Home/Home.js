import React from "react";
import './Home.css'
import HomeGallery from './HomeGallery/HomeGallery'
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="serviceContainer">
        <Services></Services>
      </div>
      <div className="homeGalleryContainer">
        <HomeGallery></HomeGallery>
      </div>
      
    </div>
  );
};

export default Home;
