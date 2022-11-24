import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDW3uQhjvvxFC2sRtn2oJ6QnGJSkC0rURA",
  authDomain: "todo-list-react-d0c4c.firebaseapp.com",
  databaseURL: "https://todo-list-react-d0c4c-default-rtdb.firebaseio.com",
  projectId: "todo-list-react-d0c4c",
  storageBucket: "todo-list-react-d0c4c.appspot.com",
  messagingSenderId: "397982756018",
  appId: "1:397982756018:web:2be1549d2bba87b5466dab",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();
const storage = getStorage(app);
// const date = storage.ref("date");
//const provider=new GoogleAuthProvider()

export { db, auth, storage };
