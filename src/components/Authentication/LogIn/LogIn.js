import React, { useRef } from 'react';
import './LogIn.css'
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogIn from '../SocialLogIn/SocialLogIn';


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
    let errorElement;

    if(loading || sending){
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const navigateRegister = event => {
        navigate('/register');
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('Sent email');
        }
        else{
            alert('please enter your email address');
        }
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
            {errorElement}
            <p className='font-thin mt-3'>New to Genius Car? <Link to="/signup" className='text-blue-500 font-normal underline' onClick={navigateRegister}>Please Register</Link> </p>
            <p className='font-thin mt-1'>Forget Password? <Link className='text-red-400 font-normal underline' onClick={resetPassword}>Reset Password</Link> </p>
            <SocialLogIn></SocialLogIn>
            </div>
        </div>
    );
};

export default LogIn;