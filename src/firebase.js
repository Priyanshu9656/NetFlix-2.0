import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAK-xM2qskVE6Dc_xvAWqzfXzGwBSdKkMc",
  authDomain: "netflix-clone-fb12a.firebaseapp.com",
  projectId: "netflix-clone-fb12a",
  storageBucket: "netflix-clone-fb12a.appspot.com",
  messagingSenderId: "876797821815",
  appId: "1:876797821815:web:cb2ff4aad2c0f86dad5772"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth=getAuth(app);