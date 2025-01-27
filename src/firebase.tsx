// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/**
 *  MOVE THE BELOW CONFIGURATION TO THE .env FILE
 *  https://firebase.google.com/docs/auth/web/redirect-best-practices?hl=ru&authuser=0&_gl=1*jmoun9*_ga*MTAyNzY2NjU4Ny4xNzM3NzUxMDQy*_ga_CW55HF8NVT*MTczNzc1NDM2My4yLjEuMTczNzc1Njc0OC42MC4wLjA.
 *
 */

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

// const analytics = getAnalytics(app);

export { auth, db };
