// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCluwTz864aXbK0JmdReA1dxesbkvwQ4gk",
  authDomain: "aliyahs-kitchen.firebaseapp.com",
  projectId: "aliyahs-kitchen",
  storageBucket: "aliyahs-kitchen.appspot.com",
  messagingSenderId: "380143302954",
  appId: "1:380143302954:web:65d80c1da42115b60c8653",
  measurementId: "G-8DKD92VPKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

