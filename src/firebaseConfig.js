
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALr6kcXBs7GP3NnoyeX3CdX-iRTQ-5QMQ",
    authDomain: "codedeck-23dd9.firebaseapp.com",
    projectId: "codedeck-23dd9",
    storageBucket: "codedeck-23dd9.appspot.com",
    messagingSenderId: "1075039387966",
    appId: "1:1075039387966:web:ec6be9938a3ebfbdaeac6f",
    measurementId: "G-K69V9XJENF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebaseApp.auth();

export { db, auth };