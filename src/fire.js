import firebase from 'firebase';
import 'firebase/auth'
 var firebaseConfig = {
    apiKey: "AIzaSyDxrgTeBsUDX5GqpquLqx4vKmWb_4divps",
    authDomain: "olxclone-55940.firebaseapp.com",
    databaseURL: "https://olxclone-55940.firebaseio.com",
    projectId: "olxclone-55940",
    storageBucket: "olxclone-55940.appspot.com",
    messagingSenderId: "725586293080",
    appId: "1:725586293080:web:fbd68c5d5a9c7effe8f52d",
    measurementId: "G-LKCPQPLFG0"
  };
  const fire=firebase.initializeApp(firebaseConfig)

  export default fire;