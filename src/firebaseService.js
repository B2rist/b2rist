import {
  GoogleAuthProvider,
  getAuth,
  signInWithRedirect,
  signOut,
  getRedirectResult,
  setPersistence,
  onAuthStateChanged,
  browserLocalPersistence,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFunctions, connectFunctionsEmulator, httpsCallable } from 'firebase/functions';

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

const functions = getFunctions(app);

if (window.location.hostname === 'localhost' && process.env.REACT_APP_EMULATOR) {
  connectFunctionsEmulator(functions, 'localhost', 5001);
}

const callFunction = (name) => httpsCallable(functions, name);

export const registerFunction = (name) => callFunction(name);

getRedirectResult(auth);

export const authStateChanges = (callback) => onAuthStateChanged(auth, callback);

export const signInWithGoogle = () => setPersistence(auth, browserLocalPersistence).then(() => {
    const provider = new GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/photoslibrary.readonly');
    signInWithRedirect(auth, provider);
  });

export const logout = () => signOut(auth);
