import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.confiq";
import { TwitterAuthProvider } from "firebase/auth";

import { GoogleAuthProvider } from "firebase/auth";
const twitter = new TwitterAuthProvider();
const google = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user,setUser] = useState(null)
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

  const logOut = ()=>{
    return signOut(auth)
  }

  useEffect(()=>{
  const unSubscribe =  onAuthStateChanged(auth,register =>{
        console.log('user in the auth state changed',register)
        setUser(register)
    });
    return ()=>{
unSubscribe ()

    }

  },[])

  const authInfo = {
    user,
    setUser,
    register,
    loginUser,
    googleLogin,
    twitterLogin,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
