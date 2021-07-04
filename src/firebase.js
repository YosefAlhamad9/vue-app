import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEFWHoNJBc68iRHd7A8iIkUf_E7_XKrD8",
  authDomain: "shoping-c86b0.firebaseapp.com",
  databaseURL:
    "https://shoping-c86b0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "shoping-c86b0",
  storageBucket: "shoping-c86b0.appspot.com",
  messagingSenderId: "1029796136330",
  appId: "1:1029796136330:web:0e7bff72be6292826ef473",
  measurementId: "G-1Z14GMCF8J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
