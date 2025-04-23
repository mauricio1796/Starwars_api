import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDyUAjcpzkFPL-W6Xn7IspYZ0xPoLbdec8",
  authDomain: "starwarsappi-7f1e1.firebaseapp.com",
  projectId: "starwarsappi-7f1e1",
  storageBucket: "starwarsappi-7f1e1.firebasestorage.app",
  messagingSenderId: "65150216099",
  appId: "1:65150216099:web:198236bc63a54343b89c16"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); // 

export { db, auth }; // 
