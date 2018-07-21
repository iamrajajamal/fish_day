import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD0OtGqcsViQ1KiHrl0IGHV1zPbgaat2iQ",
  authDomain: "catch-of-the-day-jamal.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jamal.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;
