// import { createContext, useState } from 'react';
// import app from '../firebase/firebase.config'
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// export const AuthContext = createContext();
// const auth = getAuth(app);
//  const AuthProvider = (children) => {

//   const [user , setUser] = useState(null);
//   const [loading , setLoading] = useState(true);

//   const createUser = (auth , email , username , password) => {
//     setLoading(true);

//     return createUserWithEmailAndPassword()
//   }

//   // const SignUpWithGmail =()=>{

//   // }
//   const authInfo={
//     createUser

//   }

//   return (
//     <AuthContext.Provider value={authInfo}>
//       {children}
//     </AuthContext.Provider>
//   )
// }

// export default AuthProvider;

import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  // Added curly braces around children

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, username, password) => {
    // Removed unnecessary parameter 'auth' and 'username'
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, username, password); // Pass 'auth' and parameters to createUserWithEmailAndPassword
  };

  const authInfo = {
    createUser,
  };

  // const signUpWithGmail = () => (user,password){
  //   return signUpWithGmail()
  // }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
