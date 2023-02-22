import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBFumdFo0F-4X4ynnvDPEhQKvl7DeZHzgU",
  authDomain: "chatgpt-message-yt.firebaseapp.com",
  projectId: "chatgpt-message-yt",
  storageBucket: "chatgpt-message-yt.appspot.com",
  messagingSenderId: "880160655866",
  appId: "1:880160655866:web:e4c21d1411af956aa5bc43",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
