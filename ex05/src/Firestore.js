import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDKnrPncPdRDiDvCqrdxfWqVBxfqyWerLw",
    authDomain: "ninja-firestore-c9996.firebaseapp.com",
    databaseURL: "https://ninja-firestore-c9996.firebaseio.com",
    projectId: "ninja-firestore-c9996",
    storageBucket: "ninja-firestore-c9996.appspot.com",
    messagingSenderId: "75336445678"
};
firebase.initializeApp(config);

export default firebase;