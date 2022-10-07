import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


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
        return <BiDotsHorizontalRounded></BiDotsHorizontalRounded>
    }

    if (user) {
        navigate(from, { replace: true });
        console.log(navigate);
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='pt-32 text-center'>
            <h2 className='text-6xl text-center font-semibold
            text-white mt-2'>Please Login</h2>
            <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email"/>
                <br />
                <input ref={passwordRef} type="password" name="password"/>
                <br />
                <input type="submit" value="Log In" />
            </form>
            </div>
            
            
        </div>
    );
};

export default LogIn;