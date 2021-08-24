import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyC49cRfBDVXGQx1XJYAF37J7kkFc-TSEZI",
    authDomain: "blog-list-1d104.firebaseapp.com",
    databaseURL: "https://blog-list-1d104-default-rtdb.firebaseio.com",
    projectId: "blog-list-1d104",
    storageBucket: "blog-list-1d104.appspot.com",
    messagingSenderId: "757047064866",
    appId: "1:757047064866:web:d2661f2b8ea8eeab744d7b"
  };
firebase.initializeApp(firebaseConfig);

// utils
const firestore = firebase.firestore;
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const userCollection = db.collection('usuarios');
const employeesCollection = db.collection('empleados');

const createDoc = function (collection, docId, docData) {
  return db.collection(collection).doc(docId).set(docData);
}

const updateDoc = function (collection, docId, docData) {
  return db.collection(collection).doc(docId).update(docData);
}

const arrayUnion = function(docData) {
  return firestore.FieldValue.arrayUnion(docData);
}

export { 
    db,
    auth,
    firestore,
    userCollection,
    employeesCollection,
    updateDoc,
    arrayUnion,
    createDoc
}