import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAaWXU_7bDgrnp4U0K4rXEeUz2nu_4lV0Q",
  authDomain: "fir-news-app-92b9a.firebaseapp.com",
  projectId: "fir-news-app-92b9a",
  storageBucket: "fir-news-app-92b9a.appspot.com",
  messagingSenderId: "495110142743",
  appId: "1:495110142743:web:0d740ec8bacf6225489552",
  measurementId: "G-FTTGCZSHFJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
