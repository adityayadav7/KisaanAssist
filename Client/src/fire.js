import firebase from 'firebase/app';
// var config = {
//     apiKey: "AIzaSyAOzfrVWVM6alGtIN5lw3Ibo3UT9ZKRAZk",
//  authDomain: "kisanfeedback-b2c73.firebaseapp.com",
//  databaseURL: "https://kisanfeedback-b2c73.firebaseio.com",
//  projectId: "kisanfeedback-b2c73",
//  storageBucket: "kisanfeedback-b2c73.appspot.com",
//  messagingSenderId: "645459631660",
//  appId: "1:645459631660:web:46f70000879f7f0177fb89",
//  measurementId: "G-ZW80NCCNXJ"
 
//   };
//   if(!firebase.apps.length){
//     firebase.initializeApp(config);
//   }
 
  try {
    firebase.initializeApp({apiKey: "AIzaSyAOzfrVWVM6alGtIN5lw3Ibo3UT9ZKRAZk",
    authDomain: "kisanfeedback-b2c73.firebaseapp.com",
    databaseURL: "https://kisanfeedback-b2c73.firebaseio.com",
    projectId: "kisanfeedback-b2c73",
    storageBucket: "kisanfeedback-b2c73.appspot.com",
    messagingSenderId: "645459631660",
    appId: "1:645459631660:web:46f70000879f7f0177fb89",
    measurementId: "G-ZW80NCCNXJ"
    })
    } catch (err) {
    // we skip the “already exists” message which is
    // not an actual error when we’re hot-reloading
    if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error raised', err.stack)
    }}
    const firebaseApp= firebase;
    export default firebaseApp;