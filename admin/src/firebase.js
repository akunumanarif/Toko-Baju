// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlTraDYYT5DgL8GrEKWByxDRnDVuiQ9hk",
  authDomain: "shop-v1-20971.firebaseapp.com",
  projectId: "shop-v1-20971",
  storageBucket: "shop-v1-20971.appspot.com",
  messagingSenderId: "358095268635",
  appId: "1:358095268635:web:34591b5bb9996c464681be",
  measurementId: "G-VKECPTN11P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
