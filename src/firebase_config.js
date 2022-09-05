import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyALiLJ-G4yD-Y1Zb1UwMtsR4JcR_Hnf2hk",
    authDomain: "todo2-1f266.firebaseapp.com",
    projectId: "todo2-1f266",
    storageBucket: "todo2-1f266.appspot.com",
    messagingSenderId: "627332653475",
    appId: "1:627332653475:web:b94b260a2c4cd24789ba16"
  };

  const fire=firebase.initializeApp(firebaseConfig);

  const db= firebase.firestore();

  export {db,fire};