import { initializeApp } from "firebase/app";
// import {getFirestore} from "@firebase/firestore";

// import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyA1ZODNCR6kjGRgYWmwl6-7jRQ_kuzJHQk",
    authDomain: "comsat-drive-live.firebaseapp.com",
    databaseURL: "https://comsat-drive-live-default-rtdb.firebaseio.com",
    projectId: "comsat-drive-live",
    storageBucket: "comsat-drive-live.appspot.com",
    messagingSenderId: "988054495779",
    appId: "1:988054495779:web:e00dfcddfdcceecb30c796",
    databaseURL: "https://comsat-drive-live-default-rtdb.firebaseio.com/"
    
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// export const db=getFirestore(app);


// const firedb= firebase.initializeApp(firebaseConfig);
// export default firedb.database().ref();