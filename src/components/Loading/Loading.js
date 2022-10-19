import React from 'react';
import './Loading.css';

const Loading = () => {
    return (
        <div className='loadDiv h-screen w-screen items-center text-center'>
            <div className='loader text-blue-500'></div>
        </div>
    );
};

export default Loading;