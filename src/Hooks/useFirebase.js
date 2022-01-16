import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut,onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";

initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState("");
  const [error,setError] = useState('');
  const [isloading,setIsLoading] = useState(true);

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

//google sign in
  const googleSignIn = (location, navigate) => {
    setIsLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        alert("sign up successfully");
        setError('');
        const destination = location?.state?.from || '/';
         navigate(destination);
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(()=>  setIsLoading(false))
  };
// sign out
const signout = () =>{
    setIsLoading(true);
    signOut(auth)
    .then(() => {
        setError('');
      }).catch((error) => {
        setError(error.message)
      })
      .finally(()=>  setIsLoading(false))
}

// ovserver on auth state change
  useEffect(() => {
    const Subscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        } else {
            setUser('');
        }
        setIsLoading(false);
        return () => Subscribe;
      });
  }, [auth]);

  //create new user
  const createUser=(email,password,location,navigate)=>{
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        alert('successfully create user')
        setError('');
        const destination = location?.state?.from || "/";
        navigate(destination);
    })
    .catch((error) => {
        setError(error.message)
    })
    .finally(()=> setIsLoading(false))
}
//login with email and password
const login =(email,password,location,navigate)=>{
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("login successfully");
            setError('');
            const destination = location?.state?.from || "/";
            navigate(destination);
        })
        .catch((error) => {
            setError(error.message)
        })
        .finally(()=> setIsLoading(false))
}

  return {
    googleSignIn,
    signout,
    user,
    error,
    isloading,
    createUser,
    login
  };
};
export default useFirebase;
