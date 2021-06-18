import firebase from "firebase/app";
import "firebase/auth" 


const firebaseConfig = {
    apiKey: "AIzaSyBE787E1HNx8jqjuzxTjm670cK2FeuLdfE",
    authDomain: "crud-udemy-react-50e51.firebaseapp.com",
    projectId: "crud-udemy-react-50e51",
    storageBucket: "crud-udemy-react-50e51.appspot.com",
    messagingSenderId: "681605506248",
    appId: "1:681605506248:web:f3ecdb1e2ad5c11f9131fd"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {auth, firebase}