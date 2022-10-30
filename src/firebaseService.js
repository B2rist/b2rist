import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
  getRedirectResult,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export const authentication = { checked: false };

export const authStateChanges = (callback) => onAuthStateChanged(auth, callback);

getRedirectResult(auth).finally(() => {
  authentication.checked = true;
});

export const signInWithGoogle = () => setPersistence(auth, browserLocalPersistence).then(() => {
    const provider = new GoogleAuthProvider();
    return signInWithRedirect(auth, provider);
  });

export const logout = () => signOut(auth);
