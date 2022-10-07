import React, { useRef } from 'react';
import './SignUp.css'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');    
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    if(loading || updating){
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
    }


    return (
        <div className='pt-32 text-center'>
            <h2 className='text-4xl md:text-6xl text-center font-semibold
            text-white mt-2 mb-9'>Please <span className='text-blue-500 font-bold'>SignUp</span> </h2>
            <div className='formContainer'>
            <form onSubmit={handleRegister}>
                <input className='mb-4' type="text" name="name" placeholder='Enter Your Name'/>
                <br />
                <input ref={emailRef} className='mb-4' type="email" name="email" placeholder='Enter Your Email'/>
                <br />
                <input ref={passwordRef} className='mb-3' type="password" name="password" placeholder='Enter Your Password'/>
                <br />
                <input className='submitBtn' type="submit" value="Sign Up" />
            </form>
            </div>
            
            
        </div>
    );
};

export default SignUp;