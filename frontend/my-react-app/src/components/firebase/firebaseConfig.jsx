
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDZAvHpW7xvbtI9dtFpepQlfvW0ghPzi6Y",
    authDomain: "greeting-card-web.firebaseapp.com",
    projectId: "greeting-card-web",
    storageBucket: "greeting-card-web.firebasestorage.app",
    messagingSenderId: "383956683019",
    appId: "1:383956683019:web:5c90131021564a693c7a0e",
    measurementId: "G-04BP8L6YLG"
  };

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };