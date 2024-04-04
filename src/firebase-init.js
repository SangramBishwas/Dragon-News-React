// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnn9pjxwc4dJGBTyfmSdCQumt-71inIJA",
  authDomain: "dragon-news-auth-79ecd.firebaseapp.com",
  projectId: "dragon-news-auth-79ecd",
  storageBucket: "dragon-news-auth-79ecd.appspot.com",
  messagingSenderId: "1068763535155",
  appId: "1:1068763535155:web:26de7d04ef366a8629d046"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;