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
const employeesCollection = db.collection('empleados');
const userCollection = db.collection('usuarios');

const createDoc = function (collection, mapValues) {
  return db.collection(collection).add(mapValues);
}

const updateDoc = function (collection, doc, mapValues) {
  return db.collection(collection).doc(doc).update(mapValues);
}

const arrayUnion = function(mapValues) {
  return firestore.FieldValue.arrayUnion(mapValues);
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