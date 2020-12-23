import firebase from 'firebase/app';
// import firestore from 'firebase/firestore'

// const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
    apiKey: "AIzaSyAgeFiYaj7Jd9U1Fmh3BZOGaMTI49XbmsQ",
    authDomain: "todo-acb1f.firebaseapp.com",
    projectId: "todo-acb1f",
    storageBucket: "todo-acb1f.appspot.com",
    messagingSenderId: "100520862119",
    appId: "1:100520862119:web:fa1aa99dc4ee7040625682",
    measurementId: "G-V4G42E3GW5"
  };
 
firebase.initializeApp(firebaseConfig);

// firebase.firestore().settings(settings);

export default firebase;