import React from "react";
import './Home.css'
import AkibSadat from '../../images/AkibSadat.jpg'

const Home = () => {
  return (
    <div className="">
      <div className="grid grid-cols-2 items-center text-center">
        <div className="text-white">
          <h1 className="text-7xl	font-bold	">Hey, I'm Akib.</h1>
          <p className="text-2xl mt-5">Professional wildlife photographer.</p>
        </div>
        <div>
          <img
            src={AkibSadat}
            alt="akib sadat"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
