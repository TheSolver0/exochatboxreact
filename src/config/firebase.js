// import Rebase from 're-base'
import { getDatabase } from "firebase/database";

import firebase from 'firebase/compat/app'
// import {getDatabase} from   'firebase/database'

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAvAYONtCyrb0jEUCXNQp1X68KoO5MUSJE",
//     authDomain: "chatbox-4d24d.firebaseapp.com",
//     databaseURL: "https://chatbox-4d24d-default-rtdb.europe-west1.firebasedatabase.app",
// })
const firebaseConfig = {
    apiKey: "AIzaSyAvAYONtCyrb0jEUCXNQp1X68KoO5MUSJE",
    authDomain: "chatbox-4d24d.firebaseapp.com",
    databaseURL: "https://chatbox-4d24d-default-rtdb.europe-west1.firebasedatabase.app",
   
  };
  const app = firebase.initializeApp(firebaseConfig);

  export const database = getDatabase(app);

// const base = getDatabase(firebaseApp)

// export { firebaseApp }

// export default base