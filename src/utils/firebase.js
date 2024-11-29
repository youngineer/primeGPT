// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGzzNfv7K7sMI29H-ljvDyK3yGdh2-w9o",
  authDomain: "primegpt-6b956.firebaseapp.com",
  projectId: "primegpt-6b956",
  storageBucket: "primegpt-6b956.firebasestorage.app",
  messagingSenderId: "196744260839",
  appId: "1:196744260839:web:1064677cabe7aa6dfbc642",
  measurementId: "G-DBZYWEHZ2R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();