import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext } from "react";
import auth from "../firebase/firebase.confiq";
import { TwitterAuthProvider } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
const twitter = new TwitterAuthProvider();
const google = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, google);
  };
  const twitterLogin = ()=>{
    return signInWithPopup(auth,twitter)
  }

  const authInfo = {
    register,
    loginUser,
    googleLogin,
    twitterLogin
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
