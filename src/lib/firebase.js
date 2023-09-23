import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGtIrBzXgPA0pGS3uREt2Oyof6NrDJu5s",
  authDomain: "gallery-8232e.firebaseapp.com",
  projectId: "gallery-8232e",
  storageBucket: "gallery-8232e.appspot.com",
  messagingSenderId: "125673339804",
  appId: "1:125673339804:web:3650c00c6a5d4932a2a659",
  measurementId: "G-YQ7EXTNRFZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
