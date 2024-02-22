// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-bca7a.firebaseapp.com",
  projectId: "mern-blog-bca7a",
  storageBucket: "mern-blog-bca7a.appspot.com",
  messagingSenderId: "677001052193",
  appId: "1:677001052193:web:4285a4b5dd9fed7753a360",
  measurementId: "G-EBZZFY2N8Y"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);