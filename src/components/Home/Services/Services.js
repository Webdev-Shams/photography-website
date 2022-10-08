import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = () => {
    return (
        <div>
            <div className="text-center mx-20 md:mx-32 lg:mx-9">
                <h1 className="mt-12 mb-9 text-5xl md:text-6xl text-white font-light text-center">Need Wildlife Photos?</h1>
                <div className="serviceContainer grid grid-cols-1 lg:grid-cols-3 items center">
                <div className="service">
                    <p className="text-4xl mb-4 text-blue-500 font-semibold">Silver Click</p>
                    <p className="text-4xl mb-9 font-thin">50 Photos</p>
                    <p className="text-4xl font-bold">$100.00</p>
                    <Link><AiOutlineArrowRight className="arrow"></AiOutlineArrowRight></Link>
                </div>
                <div className="service">
                    <p className="text-4xl mb-4 text-blue-500 font-semibold">Gold Click</p>
                    <p className="text-4xl mb-9 font-thin">200 Photos</p>
                    <p className="text-5xl font-bold">$350.00</p>
                    <Link><AiOutlineArrowRight className="arrow"></AiOutlineArrowRight></Link>
                </div>
                <div className="service platinum">
                    <p className="text-4xl mb-4 font-semibold text-zinc-800	">Platinum Click</p>
                    <p className="text-4xl mb-9 font-thin text-zinc-800	">500 Photos</p>
                    <p className="text-5xl font-bold">$800.00</p>
                    <Link><AiOutlineArrowRight className="arrowPlatinum"></AiOutlineArrowRight></Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Services;