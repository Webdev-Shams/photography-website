import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiGrid } from "react-icons/fi";
import { BiXCircle } from "react-icons/bi";
import { IoMdCamera } from "react-icons/io";


const Header = () => {
    const [active,setActive] = useState(false)

    const showMenu = () => {
        setActive(!active)
    }

    return (
        <div className='fixed w-full backdrop-blur-sm text-white flex justify-between px-6 py-2 items-center border-b border-white'>

                <div className='text-2xl font-bold text-center '>
                    <h1><IoMdCamera className='inline text-blue-500'/> <span className='text-2xl'>Clickography</span></h1>
                </div>

                <nav>

                    <div className='absolute right-6 md:hidden top-6 scale-150'>
                        <FiGrid onClick={showMenu} className='scale-150 cursor-pointer'/>
                    </div>

                        <ul className='hidden md:flex gap-8 p-6 uppercase'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>

                        <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center p-8 md:hidden' : 'hidden'}>
                            <BiXCircle onClick={showMenu} className='cursor-pointer text-4xl'/>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>

            </nav>
        </div>
    );
};

export default Header;