import firebase from "firebase/app"
import "firebase/firestore"

const app = firebase.initializeApp ({
    apiKey: "AIzaSyC7n91uHQaOK3pdHEdACbJ-voGb0bhYSQs",
    authDomain: "ecommer-nuevomundo.firebaseapp.com",
    projectId: "ecommer-nuevomundo",
    storageBucket: "ecommer-nuevomundo.appspot.com",
    messagingSenderId: "731857832672",
    appId: "1:731857832672:web:e3f7b56be64d16aa635e85"
  })

  export const getFirebase = () => app

  export const getFirestore = () => firebase.firestore(app)