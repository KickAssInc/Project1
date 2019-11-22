import firebase from 'firebase'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCaNDPbY2chz4EvuCP293d3aMbFDwyEoyM",
  authDomain: "code-gym.firebaseapp.com",
  databaseURL: "https://code-gym.firebaseio.com",
  projectId: "code-gym",
  storageBucket: "code-gym.appspot.com",
  messagingSenderId: "865601288437",
  appId: "1:865601288437:web:c68d1c740aed9b1b3cedbc",
  measurementId: "G-EP5QY1L434"
}; 

const firebaseapp = firebase.initializeApp(config)
