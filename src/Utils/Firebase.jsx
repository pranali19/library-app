import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyAGkxsMf8BWzm0CdIx6i-u9O8jpqoIdnt0",
  authDomain: "libraryapp-24033.firebaseapp.com",
  projectId: "libraryapp-24033",
  storageBucket: "libraryapp-24033.appspot.com",
  messagingSenderId: "930141710388",
  appId: "1:930141710388:web:bf95089418b92337bd8261",
  measurementId: "G-1MXMG2X6N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app