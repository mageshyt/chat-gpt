// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbVfZXG7suFHuJC4S2yMcJ9iFouRWmso0",
  authDomain: "chat-gpt-cecd1.firebaseapp.com",
  projectId: "chat-gpt-cecd1",
  storageBucket: "chat-gpt-cecd1.appspot.com",
  messagingSenderId: "1072526094794",
  appId: "1:1072526094794:web:aa324d673c7d0a91751f33",
};

// Initialize Firebase

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
