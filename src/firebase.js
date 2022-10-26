// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAZO-DUd_KEVuKYgXLjYD_N9W1DAkod0rs",
    authDomain: "dreflix-clone.firebaseapp.com",
    projectId: "dreflix-clone",
    storageBucket: "dreflix-clone.appspot.com",
    messagingSenderId: "106972836376",
    appId: "1:106972836376:web:b7374710bccc09ec4b896d"
  };

  // AUTENTICACION
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth , db };
// export default db;