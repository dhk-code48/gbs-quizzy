import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPdk1qQcAlnnyKeiayH8ET6vEn9SAb9hc",
  authDomain: "quizzy-gbs.firebaseapp.com",
  projectId: "quizzy-gbs",
  storageBucket: "quizzy-gbs.appspot.com",
  messagingSenderId: "922045705864",
  appId: "1:922045705864:web:0733a071ab522f42b3393d",
  measurementId: "G-66JMFC6C5D",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
