import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut,onAuthStateChanged } from "firebase/auth";

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

  return {
    googleSignIn,
    signout,
    user,
    error,
    isloading
  };
};
export default useFirebase;
