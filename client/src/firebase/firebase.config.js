// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5vQQ_DJMGOItwDoB5VabrlvlH2j9w_TE",
  authDomain: "news-the-dragon.firebaseapp.com",
  projectId: "news-the-dragon",
  storageBucket: "news-the-dragon.appspot.com",
  messagingSenderId: "1075183949567",
  appId: "1:1075183949567:web:1527643d98bb10f7a11eca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;