
import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKyZNNSqUXSFia-YdCx432ea1NCqBwylg",
  authDomain: "coffee-store-93d4c.firebaseapp.com",
  projectId: "coffee-store-93d4c",
  storageBucket: "coffee-store-93d4c.appspot.com",
  messagingSenderId: "661831091654",
  appId: "1:661831091654:web:557c1ba888f5d79a271ec7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth
