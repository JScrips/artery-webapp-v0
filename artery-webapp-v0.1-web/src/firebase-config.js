import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD--q601uzF620J9K2RzlPG9yKzT_HMl8w",
    authDomain: "artery-webapp.firebaseapp.com",
    projectId: "artery-webapp",
    storageBucket: "artery-webapp.appspot.com",
    messagingSenderId: "282231239265",
    appId: "1:282231239265:web:afbcdd1d55719c6b843020"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);