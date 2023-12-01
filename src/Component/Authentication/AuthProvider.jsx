import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./Firebase.Config";import { GoogleAuthProvider } from "firebase/auth";




export const AuthContext =createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState()
    const[loading,setLoading]=useState(true)
    const auth = getAuth(app);
    const handleRegister =(email,password)=>{
        setLoading(true)
      return  createUserWithEmailAndPassword(auth, email, password)
    }
const handleSignIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}
const provider = new GoogleAuthProvider();
const handleGoogle=(email,password)=>{
    setLoading(true)
    return signInWithPopup(auth, provider)
}
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}

useEffect(()=>{
    const UnSubscribe =onAuthStateChanged(auth, (CurrentUser) => {
        setLoading(false)
        setUser(CurrentUser)
    })
    return ()=> UnSubscribe()
},[])
const userInfo ={
    handleSignIn,
    handleGoogle,
    handleRegister,
    loading,
    user,
    logOut


}
    return (
        <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;