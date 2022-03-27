import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA5EYzujnvMe_zSrJsnOo6Yo0UWM-fmKvM',
  authDomain: 'stiprus-kartu-6481e.firebaseapp.com',
  projectId: 'stiprus-kartu-6481e',
  storageBucket: 'stiprus-kartu-6481e.appspot.com',
  messagingSenderId: '64466940803',
  appId: '1:64466940803:web:03fefa192fc26a90dafcb6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
