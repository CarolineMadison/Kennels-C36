import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"
import Kennel from './components/Kennel'
import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyB0FEOKb_SVac2VUN3nPTyb8d1Oy-Ji1uk",
  authDomain: "kennel-nss-c36-practice.firebaseapp.com",
  databaseURL: "https://kennel-nss-c36-practice.firebaseio.com",
  projectId: "kennel-nss-c36-practice",
  storageBucket: "kennel-nss-c36-practice.appspot.com",
  messagingSenderId: "645669721525",
  appId: "1:645669721525:web:3b710560ef5f6c4408b5fc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <Router>
    <Kennel />
  </Router>
  , document.getElementById('root'))


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();



