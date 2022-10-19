import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className='pt-32 font-light text-center'>
            <h1 className="pt-20 mb-9 text-5xl md:text-6xl text-white text-center">Who am <span className='text-blue-500 font-bold'>I?</span> </h1>
            <img className='mx-auto developerPic' src="https://lh3.googleusercontent.com/a/ALm5wu2wTuteraE0YZcYfOHNZgTZUEdpATi1w1xxfHQp=s360-p-rw-no" alt="shams-saif" />
            <p className='text-2xl'>Md. Shams Saif</p>
            <p className='text-xl'>My Goal is to become a full stack web developer before 2023 and get a job to fullfill my dreams.</p>
        </div>
    );
};

export default About;