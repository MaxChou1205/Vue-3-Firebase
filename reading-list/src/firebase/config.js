import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1MU8Ittk4hd2yFpkYWTqwyiRTlk0MWDE",
  authDomain: "vue-3-46520.firebaseapp.com",
  projectId: "vue-3-46520",
  storageBucket: "vue-3-46520.appspot.com",
  messagingSenderId: "495271510507",
  appId: "1:495271510507:web:4f119bbbaff066f4de59ae"
};

initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();

export { db, auth };
