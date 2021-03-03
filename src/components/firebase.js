import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDkS_ZPubtAbCVp06LT4iNVLOSgD3V0J0Q',
  authDomain: 'slack-clone-50177.firebaseapp.com',
  projectId: 'slack-clone-50177',
  storageBucket: 'slack-clone-50177.appspot.com',
  messagingSenderId: '33442088051',
  appId: '1:33442088051:web:71958619c1e80dd6521606',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider, db }
