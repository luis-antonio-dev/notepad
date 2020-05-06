import React from 'react'
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCmOjUZ_h0BR7fEfk_sLw4tNEdIygExqsM",
    authDomain: "crud-firebase-rn-9a26a.firebaseapp.com",
    databaseURL: "https://crud-firebase-rn-9a26a.firebaseio.com",
    projectId: "crud-firebase-rn-9a26a",
    storageBucket: "crud-firebase-rn-9a26a.appspot.com",
    messagingSenderId: "324608469782",
    appId: "1:324608469782:web:3a0fb70d0cc3fd0d4f3e37",
    measurementId: "G-QDHX5863Z1"
};

firebase.initializeApp(firebaseConfig);

export default firebase