import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAKTiTKTgMuQBjGUOYtDcIJc6bX50CG5EM',
  authDomain: 'agenda-react-f9f62.firebaseapp.com',
  projectId: 'agenda-react-f9f62',
  storageBucket: 'agenda-react-f9f62.appspot.com',
  messagingSenderId: '467549719036',
  appId: '1:467549719036:web:068a430baeac9e63db4a79',
  measurementId: 'G-CWWJEGG54E',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, db, googleAuthProvider }
