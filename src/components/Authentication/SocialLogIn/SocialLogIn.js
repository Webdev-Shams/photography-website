import React from 'react';
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { CgFacebook, CgGoogle } from 'react-icons/cg';
import { AiFillGithub } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import './SocialLogIn.css'

const SocialLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    
    let errorElement;

    if(loading || loading1){
        return <Loading></Loading>
    }
    if(loading1){
        return <Loading></Loading>
    }
    if(loading2){
        return <Loading></Loading>
    }

    // if (error || error1) {
    //     errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    // }

    if (error2) {
           console.log(error2.message);
        }

    if (user) {
        navigate('/home');
    }
    if (user1) {
        navigate('/home');
    }
    if (user2) {
        navigate('/home');
    }

    console.log(user2);

    return (
        <div>
            <div className='flex items-center'>
                <div style={{ height: '1px' }} className='bg-blue-500 w-1/2 mt-3'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-blue-500 w-1/2 mt-3'></div>
            </div>
            <p className='px-2'>Sign In with</p>
            <div className='socialIconContainer grid grid-cols-3 text-center items-center'>
                <button
                    onClick={() => signInWithGoogle()}>
                        <CgGoogle className='socialSvg inline-block text-3xl text-blue-500 bg-white p-1 rounded-full'></CgGoogle>
                    
                </button>
                <button onClick={() => signInWithFacebook()}>
                    <CgFacebook className='socialSvg inline-block text-3xl text-blue-500 bg-white p-1 rounded-full'></CgFacebook>
                </button>
                <button
                    onClick={() => signInWithGithub()}>
                        <AiFillGithub className='socialSvg inline-block text-3xl text-blue-500 bg-white p-1 rounded-full'></AiFillGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogIn;