// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNiilQU5ZlrSyKt6JTNpO0BXCYiPEDxhg",
  authDomain: "movix-73f52.firebaseapp.com",
  projectId: "movix-73f52",
  storageBucket: "movix-73f52.appspot.com",
  messagingSenderId: "733639175634",
  appId: "1:733639175634:web:c63e50035e5b5034e9ec0b",
  measurementId: "G-N408HH3YZ6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
