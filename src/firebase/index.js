import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDFw3MLtXHKGlPjK1UeSDls8DyDUevpdYU",
  authDomain: "nms-online-compedium.firebaseapp.com",
  projectId: "nms-online-compedium",
  storageBucket: "nms-online-compedium.appspot.com",
  messagingSenderId: "807372219019",
  appId: "1:807372219019:web:70b6ffa2ee1f3365806a8e",
  measurementId: "G-ZXVXHQBMFB",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
