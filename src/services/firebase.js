import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAHcD-tri0-Q17avJVe8qjbzxYKeK2Qswk",
    authDomain: "react-marathon-e9edc.firebaseapp.com",
    databaseURL: "https://react-marathon-e9edc-default-rtdb.firebaseio.com",
    projectId: "react-marathon-e9edc",
    storageBucket: "react-marathon-e9edc.appspot.com",
    messagingSenderId: "946312842159",
    appId: "1:946312842159:web:6fac974b022fac16f3bd5a"
};

firebase.initializeApp( firebaseConfig );

export const fire = firebase;
export const database = firebase.database();

export default database;
