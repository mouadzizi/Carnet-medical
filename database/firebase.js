import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDE_8wlSom_i2PVZ3f3z1JuJNLvGlokyH8",
    authDomain: "meddoc-ef3df.firebaseapp.com",
    databaseURL: "https://meddoc-ef3df.firebaseio.com",
    projectId: "meddoc-ef3df",
    storageBucket: "meddoc-ef3df.appspot.com",
    messagingSenderId: "1045137326418",
    appId: "1:1045137326418:web:bc6c020b539c75a805fa8b",
    measurementId: "G-3M5JLSSNX5"
  };

var app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();