import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyA3Sak5rA6EmEW7D9ZnibNogY-RjbN9eco',
  authDomain: 'designhouse-ac122.firebaseapp.com',
  projectId: 'designhouse-ac122',
  storageBucket: 'designhouse-ac122.firebasestorage.app',
  messagingSenderId: '241026002133',
  appId: '1:241026002133:web:24e8c4e772f94d17f3465c',
  measurementId: 'G-GDNBWK7L4X',
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
