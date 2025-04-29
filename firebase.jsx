import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAgnAmMZ8IWO_bWw3LI21iT2KNqWHUfhkY",
  authDomain: "test-firebase-28ccc.firebaseapp.com",
  projectId: "test-firebase-28ccc",
  storageBucket: "test-firebase-28ccc.firebasestorage.app",
  messagingSenderId: "1042718563507",
  appId: "1:1042718563507:web:12093fca070bf3492aa4c6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth , db };