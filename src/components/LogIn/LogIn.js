import React, { useRef } from 'react';
import './LogIn.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";

    if(loading || sending){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='pt-32 text-center'>
            <h2 className='text-4xl md:text-6xl text-center font-semibold
            text-white mt-2 mb-9'>Please <span className='text-blue-500 font-bold'>LogIn</span> </h2>
            <div className='formContainer'>
            <form onSubmit={handleSubmit}>
                <input className='mb-5' ref={emailRef} type="email" name="email" placeholder='Enter Your Email'/>
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder='Enter Your Password'/>
                <br />
                <input className='submitBtn' type="submit" value="Log In" />
            </form>
            </div>
        </div>
    );
};

export default LogIn;