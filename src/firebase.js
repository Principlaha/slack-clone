import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCN4z9TU3UZax9pelqcaHu-60Lksn2Y4dk",
    authDomain: "slack-clone-7f803.firebaseapp.com",
    projectId: "slack-clone-7f803",
    storageBucket: "slack-clone-7f803.appspot.com",
    messagingSenderId: "223405473657",
    appId: "1:223405473657:web:00f9fd0d979076fbe239a8",
    measurementId: "G-KYVPYTV4K9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider, db };