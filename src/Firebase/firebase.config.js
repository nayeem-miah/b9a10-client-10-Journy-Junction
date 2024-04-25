// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARyKwtnXnT1aNpjB03qMJXE6p9t8DFjT4",
  authDomain: "b9a10-my-dream-country-client.firebaseapp.com",
  projectId: "b9a10-my-dream-country-client",
  storageBucket: "b9a10-my-dream-country-client.appspot.com",
  messagingSenderId: "866261093305",
  appId: "1:866261093305:web:6c0fa11c4318f480820468",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
