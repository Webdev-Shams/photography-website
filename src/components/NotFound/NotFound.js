import React from 'react';
import { FaRegSadTear } from "react-icons/fa";


const NotFound = () => {
    return (
        <div className='grid grid-cols-1 items-center pt-32 font-light text-center text-5xl md:text-6xl h-screen'>
            <div>
                <h1 className='mb-9'>NOT FOUND <span className='font-bold text-red-500'>404</span>!</h1>
                <p className='inline-block text-slate-200 text-9xl'><FaRegSadTear></FaRegSadTear></p>
            </div>
        </div>
    );
};

export default NotFound;