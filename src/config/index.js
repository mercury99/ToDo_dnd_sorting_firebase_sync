import firebase from "firebase/app";
import "firebase/database";

const  DB_CONFIG = {
    apiKey: "AIzaSyDxwxKuoKSavTsdLUuNujQCNIyuvT-CCIU",
    authDomain: "to-do-8e6eb.firebaseapp.com",
    databaseURL: "https://to-do-8e6eb.firebaseio.com",
    projectId: "to-do-8e6eb",
    storageBucket: "to-do-8e6eb.appspot.com",
    messagingSenderId: "210012918508"
};

export const app = firebase.initializeApp(DB_CONFIG);

export const sorting = app.database().ref().child("sorting");
export const todos = app.database().ref();