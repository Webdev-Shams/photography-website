import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiGrid } from "react-icons/fi";
import { BiXCircle } from "react-icons/bi";
import { IoMdCamera } from "react-icons/io";
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import './Header.css';


const Header = () => {
    const [on,seton] = useState(false)
    const [user] = useAuthState(auth);

    const showMenu = () => {
        seton(!on)
    }

    const handleSignOut = () =>{
        signOut(auth);
    }

    return (
        <div className='fixed w-full md:backdrop-blur-sm text-white flex justify-between px-6 py-4 items-center border-b border-white'>

                <div className='text-2xl font-bold text-center '>
                    <h1><IoMdCamera className='inline text-blue-500'/> <span className='text-2xl'>Clickography</span></h1>
                </div>

                <nav>

                    <div className='absolute right-6 md:hidden top-6 scale-150'>
                        <FiGrid onClick={showMenu} className='scale-150 cursor-pointer'/>
                    </div>

                        <ul className='hidden md:flex gap-8 p-6 uppercase'>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/about">About Dev</NavLink></li>
                            <li><NavLink to="/blogs">Blogs</NavLink></li>
                            {
                                user ?
                                    <button className='btn btn-NavLink text-white text-decoration-none' onClick={handleSignOut}>SIGN OUT</button>
                                :
                                <li>
                                    <NavLink className='mr-6' to="login">
                                    Login
                                    </NavLink>
                                    <NavLink to="signup">
                                    Sign Up
                                    </NavLink>
                                </li>
                            }
                        </ul>

                        <ul className={on ? 'flex-col flex items-center fixed inset-0 left-2/4 uppercase bg-black/40 backdrop-blur-lg gap-8 justify-center md:hidden' : 'hidden'}>
                            <BiXCircle onClick={showMenu} className='cursor-pointer text-4xl'/>
                            <li><NavLink to="/home">Home</NavLink></li>
                            <li><NavLink to="/gallery">Gallery</NavLink></li>
                            <li><NavLink to="/about">About Dev</NavLink></li>
                            {
                                user ?
                                    <button className='btn btn-NavLink text-white text-decoration-none' onClick={handleSignOut}>SIGN OUT</button>
                                :
                                
                                    <ul>
                                        <li className='mb-8'><NavLink to="login">
                                        Login
                                        </NavLink>
                                        </li>
                                        <li>
                                        <NavLink to="signup">
                                        Sign up
                                        </NavLink></li>
                                    </ul>
                                                                }
                        </ul>
            </nav>
        </div>
    );
};

export default Header;