import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p className='text-center text-white font-thin'>copyright &copy; {year}</p>
        </div>
    );
};

export default Footer;