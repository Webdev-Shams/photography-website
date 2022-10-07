// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGL0uT6ZlcEcoWCQ2VcA5cfg0pRgwnEKc",
  authDomain: "photographer-website-35e3d.firebaseapp.com",
  projectId: "photographer-website-35e3d",
  storageBucket: "photographer-website-35e3d.appspot.com",
  messagingSenderId: "637494807174",
  appId: "1:637494807174:web:cc040569204e2fb0001f07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;