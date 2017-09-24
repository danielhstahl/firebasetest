import firebase from 'firebase';
import {config} from '../firebaseConfig'


firebase.initializeApp(config);
//const database = firebase.database()
var provider = new firebase.auth.GoogleAuthProvider()
firebase.auth().signInWithPopup(provider)//in theory, results get picked up in actions

export default firebase;