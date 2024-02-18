import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, initializeFirestore, memoryLocalCache } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDhq9oEAahO8K5V2zAzqg9gJToPiiuCNbs",
  authDomain: "prueba-9d921.firebaseapp.com",
  projectId: "prueba-9d921",
  storageBucket: "prueba-9d921.appspot.com",
  messagingSenderId: "203978423557",
  appId: "1:203978423557:web:7df53ed5c43e4bb0668b6c"
};

const firebaseApp = initializeApp(firebaseConfig);

// Memory cache is the default if no config is specified.
initializeFirestore(firebaseApp, {localCache: memoryLocalCache()});

export const auth = getAuth(firebaseApp);
export const dbConnection = getFirestore(firebaseApp);

export default firebaseApp;