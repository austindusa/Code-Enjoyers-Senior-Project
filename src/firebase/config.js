// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQJqzzzS6P7CyPVghtIsuSSdjfb3MV4BA",
  authDomain: "code-enjoyers-senior-project.firebaseapp.com",
  projectId: "code-enjoyers-senior-project",
  storageBucket: "code-enjoyers-senior-project.appspot.com",
  messagingSenderId: "701748495221",
  appId: "1:701748495221:web:9d2238208c490c655fc93c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);