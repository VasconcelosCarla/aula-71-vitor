import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyCk22sEGxPJY8FuZmaCsgEzGNKFHqAn3WI",
    authDomain: "bibliotecaeletronica-fa31b.firebaseapp.com",
    projectId: "bibliotecaeletronica-fa31b",
    storageBucket: "bibliotecaeletronica-fa31b.appspot.com",
    messagingSenderId: "448060360",
    appId: "1:448060360:web:737bc7cc223d6b6075fefd"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();