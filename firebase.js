// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyC3gu23VvccV1y_li9s_fghq62lBoAvsc8",

  authDomain: "exercises-50a47.firebaseapp.com",

  projectId: "exercises-50a47",

  storageBucket: "exercises-50a47.appspot.com",

  messagingSenderId: "851693999717",

  appId: "1:851693999717:web:feca0653fd27da3cd6988c",

  measurementId: "G-ZMQG951Q1D"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);