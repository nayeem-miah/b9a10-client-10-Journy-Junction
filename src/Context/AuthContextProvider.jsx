/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthContextProvider = ({children}) => {
    const [user ,setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };

    const authInfo ={
        user,
        setUser,
        createUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;