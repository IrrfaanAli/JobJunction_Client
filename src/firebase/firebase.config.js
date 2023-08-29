// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu5gWzlKVkOKSVU9u8f5YQdvABkg8hVQE",
  authDomain: "workzen-9a8db.firebaseapp.com",
  projectId: "workzen-9a8db",
  storageBucket: "workzen-9a8db.appspot.com",
  messagingSenderId: "1010309156968",
  appId: "1:1010309156968:web:5dfc9fe68e67bbf9a9abdd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;