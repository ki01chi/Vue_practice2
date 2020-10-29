import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB_50V9ABDXo0awXGk0PPstrZQ6sY1qBo4",
  authDomain: "board-myapp.firebaseapp.com",
  databaseURL: "https://board-myapp.firebaseio.com",
  projectId: "board-myapp",
  storageBucket: "board-myapp.appspot.com",
  messagingSenderId: "693364416437",
  appId: "1:693364416437:web:8c07122e82279ea29783fc",
  measurementId: "G-474E6FPXH7"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const db = firebase.firestore();
export const dbmessages = db.collection('messages');