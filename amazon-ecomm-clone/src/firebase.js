// import firebase from "firebase"
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO7vtS2lYxUNq_u3a3dpaQEfzJW_1PMIE",
  authDomain: "ecomm-clone-c215f.firebaseapp.com",
  projectId: "ecomm-clone-c215f",
  storageBucket: "ecomm-clone-c215f.appspot.com",
  messagingSenderId: "814081440840",
  appId: "1:814081440840:web:e06e900c9bce7e5008ec7d",
  measurementId: "G-MYDJT9PZEM"
};

//   const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };