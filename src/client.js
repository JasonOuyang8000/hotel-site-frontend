// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  addDoc,
} from "firebase/firestore/lite";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVcIYFR6xZCtd442Fnw6nRDfIqyNcK1Ek",
  authDomain: "hotel-quick-backend.firebaseapp.com",
  projectId: "hotel-quick-backend",
  storageBucket: "hotel-quick-backend.appspot.com",
  messagingSenderId: "598363735697",
  appId: "1:598363735697:web:d81936fce42f7af8fea130",
  measurementId: "G-5DP4CRNK49",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export const sendEmail = async (name) => {
  try {
    await addDoc(collection(db, "emails"), {
      email: name,
    });
  } catch (error) {
    console.log(error);
  }
};
