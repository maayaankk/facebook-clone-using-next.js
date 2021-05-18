import firebase from 'firebase';
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJqVAa8GlkO3S_jYlDwltG0Q0n0TAGiRA",
    authDomain: "facebook-header.firebaseapp.com",
    projectId: "facebook-header",
    storageBucket: "facebook-header.appspot.com",
    messagingSenderId: "1037606840792",
    appId: "1:1037606840792:web:3c34d46ef81fa82edceaad",
    measurementId: "G-W88RB0Z4J6"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
