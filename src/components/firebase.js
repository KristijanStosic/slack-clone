import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'apiKey',
  authDomain: 'authDomain',
  projectId: 'projectId',
  storageBucket: 'storage bucket',
  messagingSenderId: 'messagingSenderId',
  appId: 'appId',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
