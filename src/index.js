import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import 'firebase/firestore'
import 'firebase/auth'

export const Context = createContext(null)


firebase.initializeApp({
  apiKey: "AIzaSyAQ0NisDT7n5kKYNI7rALGHyx2NC8w-46k",
  authDomain: "char-react-c1877.firebaseapp.com",
  projectId: "char-react-c1877",
  storageBucket: "char-react-c1877.appspot.com",
  messagingSenderId: "348612489841",
  appId: "1:348612489841:web:ed44c8008216bed95721d0",
  measurementId: "G-SE8LVH6VYB"
});

const auth = firebase.auth()
const firestore = firebase.firestore()

ReactDOM.render(
  <Context.Provider value = {{
    firebase,
    auth,
    firestore
    }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
