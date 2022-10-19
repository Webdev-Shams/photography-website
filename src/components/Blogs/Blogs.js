import React from 'react';
import { SiThreedotjs } from "react-icons/si";
import './Blogs.css'


const Blogs = () => {
    return (
        <div className='sm:px-9 md:px-16'>
            <h1 className='pt-32 mb-16 font-light text-center text-5xl md:text-6xl'>My <span className='text-blue-500'>Blogs</span></h1>
            <p className='ques'>What is the difference between authorization and authentication?</p>
            <p className='ans'>Authentication and authorization are two information processes for security purpose that site owners use for the protection of systems and information. Authentication verifies the identity of a user or service, and authorization determines their access rights.</p>
            <p className='ques'>Why am I using firebase? What other options do I have to implement authentication?</p>
            <p className='ans'>Firebase is a service provided by Google which is a very trusted and safe provider. Also it is not so complex to use Firebase authentication system. <br />
            There are some alternatives of Firebase. Such as:          
                <ul>
                    <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Back4App</li>
                    <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Backendless</li>
                    <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Kuzzle</li>
                    <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Pubnub</li>
                    <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Kumulos</li>
                </ul>
            </p>
            <p className='ques'>What other services does firebase provide other than authentication?</p>
            <p className='ans'>
            Firebase provides a lot of services other than authentication. Some of the important services of them are:
            <ul>
                <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Hosting</li>
                <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Cloud Storage</li>
                <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs>Google Analytics</li>
                <li><SiThreedotjs className='inline-block mr-3'></SiThreedotjs> Predictions</li>
            </ul>
            </p>
        </div>
    );
};

export default Blogs;