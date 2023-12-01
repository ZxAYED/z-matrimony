// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey:import.meta.env.VITE_apiKey,
    // authDomain:import.meta.env.VITE_authDomain,
    // projectId:import.meta.env.VITE_projectId,
    // storageBucket:import.meta.env.VITE_storageBucket,
    // messagingSenderId:import.meta.env.VITE_messagingSenderId,
    // appId:import.meta.env.VITE_appId,

    apiKey: "AIzaSyCG9tB9d8R6uAdNzAiUeNGEbAA5Z5DNQLc",
    authDomain: "taqwamate-df05c.firebaseapp.com",
    projectId: "taqwamate-df05c",
    storageBucket: "taqwamate-df05c.appspot.com",
    messagingSenderId: "633268024070",
    appId: "1:633268024070:web:bef04a228cd864f8e6a487"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
