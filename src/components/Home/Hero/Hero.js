import React from 'react';
import './Hero.css'
import AkibSadat from '../../../images/AkibSadat.jpg'

const Hero = () => {
    return (
        <div>
            <div className="heroSection grid grid-cols-1 md:grid-cols-2 items-center text-center">
                <div className="heroText text-white">
                <h1 className="text-5xl md:text-6xl lg:text-7xl	font-bold">Hey, I'm Akib.</h1>
                <p className="text-2xl mt-5 font-semibold">Professional wildlife <span className="text-blue-500 font-bold">Photographer</span>.</p>
                </div>
                <div className="heroImage">
                <img
                    src={AkibSadat}
                    alt="akib-sadat"
                />
                </div>
            </div>
        </div>
    );
};

export default Hero;