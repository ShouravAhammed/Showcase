// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoc8d-jznQloTUcJRxzF7fKazEaaPGdog",
  authDomain: "showcase-d8698.firebaseapp.com",
  projectId: "showcase-d8698",
  storageBucket: "showcase-d8698.appspot.com",
  messagingSenderId: "1060476373503",
  appId: "1:1060476373503:web:12f386b11ff84aa41f7fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth