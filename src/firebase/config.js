import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDFsnhdgM5qwNHwdc8ZYsUIEdosXaEr0mU",
  authDomain: "readinglist-site.firebaseapp.com",
  projectId: "readinglist-site",
  storageBucket: "readinglist-site.appspot.com",
  messagingSenderId: "1038778644758",
  appId: "1:1038778644758:web:5d7d338983598e65a6b837"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }
