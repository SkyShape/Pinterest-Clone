import firebase from "firebase";



const firebaseConfig = {
    apiKey: "AIzaSyCp21jjgMDfYKDAhXmjCnLeCKcB9os1Mgo",
    authDomain: "pinterest-clone-vd-74341.firebaseapp.com",
    projectId: "pinterest-clone-vd-74341",
    storageBucket: "pinterest-clone-vd-74341.appspot.com",
    messagingSenderId: "390429546172",
    appId: "1:390429546172:web:3c0757f3771d05483862b9",
    measurementId: "G-JPECRJ78D8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;