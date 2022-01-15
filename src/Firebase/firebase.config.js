// const firebaseConfig = {
//     apiKey: "AIzaSyA10-EAUfZ0wDxsA3Xz6IRkwZeGUlwF9VU",
//     authDomain: "top-stock-109d9.firebaseapp.com",
//     projectId: "top-stock-109d9",
//     storageBucket: "top-stock-109d9.appspot.com",
//     messagingSenderId: "218390487265",
//     appId: "1:218390487265:web:0ab1f90587bb06920e57a0"
//   };
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

export default firebaseConfig;
