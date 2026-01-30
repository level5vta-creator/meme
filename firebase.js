
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  initializeFirestore,
  persistentLocalCache,
  persistentMultipleTabManager
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyNWUJEAxhrL2MmHYiNh2AMPhlqgT7aIc",
  authDomain: "suolala-meme-wall.firebaseapp.com",
  projectId: "suolala-meme-wall",
  storageBucket: "suolala-meme-wall.appspot.com",
  messagingSenderId: "183627335961",
  appId: "1:183627335961:web:b324a08fde681be2f1dd88"
};

const app = initializeApp(firebaseConfig);

// Initialize Firestore with offline persistence enabled
const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
    tabManager: persistentMultipleTabManager()
  })
});

export { db };
