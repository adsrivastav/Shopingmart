// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";


// Your web app's Firebase configuration
/* The `firebaseConfig` object contains the configuration settings for your Firebase project. It
includes various properties such as `apiKey`, `authDomain`, `projectId`, `storageBucket`,
`messagingSenderId`, and `appId`. These properties are used to authenticate and connect your web app
to the Firebase services. */
const firebaseConfig = {
  apiKey: "AIzaSyANaBRHP0U56WgepiKyM-Xitf_lHg5_LS4",
  authDomain: "ecommerce-68d93.firebaseapp.com",
  projectId: "ecommerce-68d93",
  storageBucket: "ecommerce-68d93.appspot.com",
  messagingSenderId: "428799272368",
  appId: "1:428799272368:web:080dfb6616d7fb1e89a275"
};




// Initialize Firebase
/* The code is initializing the Firebase app using the provided configuration (`firebaseConfig`). It
then creates a Firestore instance (`db`) and an Auth instance (`auth`). The `setPersistence`
function is used to set the persistence type for the authentication session to be stored in the
browser's local storage. Finally, the `db` instance is exported for use in other parts of the code. */
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
setPersistence(auth, browserLocalPersistence);
export { db };
