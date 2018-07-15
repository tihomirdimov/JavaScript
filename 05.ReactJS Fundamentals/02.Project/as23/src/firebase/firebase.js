import firebase from 'firebase';
import 'firebase/auth/dist/index.cjs';
import 'firebase/database/dist/index.cjs';


const config = {
    apiKey: "AIzaSyAyPtrBIoSG8S0xF5Z0cd0xzyRz2ZFWo7s",
    authDomain: "as23-tihomir.firebaseapp.com",
    databaseURL: "https://as23-tihomir.firebaseio.com",
    projectId: "as23-tihomir",
    storageBucket: "as23-tihomir.appspot.com",
    messagingSenderId: "968334913431"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};