import * as firebase from "firebase";

// Optionally import the services that you want to use
//import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDKJ4NyveAyOh1oalZtkg1NmcqV3LOhuHY",
  authDomain: "iosapp-6c0c8.firebaseapp.com",
  databaseURL: "https://iosapp-6c0c8.firebaseio.com",
  projectId: "iosapp-6c0c8",
  storageBucket: "iosapp-6c0c8.appspot.com",
  messagingSenderId: "602590350649",
  appId: "1:602590350649:web:09a713ac578e244fb5ece8",
  measurementId: "G-XWQJE140C1"
};

firebase.initializeApp(firebaseConfig);

var quotelist = [];

export async function getQuotes(quotesRetrieved) {
  var db = firebase.firestore();
  db.collection("Random Quotes")
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
        quotelist.push(doc.id);
      });
      quotesRetrieved(quotelist);
    });
}
