
import firebase from 'firebase';
require('@firebase/firestore')
const firebaseConfig = {
  apiKey: "AIzaSyBRn-YqDw-Ev7q5XQuhf4-6sh8ZdsJNUwk",
  authDomain: "news-letter-app-29332.firebaseapp.com",
  databaseURL: "https://news-letter-app-29332-default-rtdb.firebaseio.com",
  projectId: "news-letter-app-29332",
  storageBucket: "news-letter-app-29332.appspot.com",
  messagingSenderId: "209170074254",
  appId: "1:209170074254:web:69a9e60c73faa474c517df"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
