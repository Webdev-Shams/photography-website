import React from "react";
import './Home.css'
import HomeGallery from './HomeGallery/HomeGallery'
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import Hero from "./Hero/Hero";
import Services from "./Services/Services";

const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <div className="serviceContainer">
        <Services></Services>
      </div>
      <HomeGallery></HomeGallery>
      
    </div>
  );
};

export default Home;
