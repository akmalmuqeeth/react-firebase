import firebase from 'firebase';

// Initialize Firebase
const config = {
	apiKey: "AIzaSyArNDWVMEK7KvUWYGPw6EqcMOOyJptJ3rE",
	authDomain: "first-flight-with-friend-f8421.firebaseapp.com",
	databaseURL: "https://first-flight-with-friend-f8421.firebaseio.com",
	projectId: "first-flight-with-friend-f8421",
	storageBucket: "first-flight-with-friend-f8421.appspot.com",
	messagingSenderId: "529707632998"
};
firebase.initializeApp(config);

export default firebase;

export const database =  firebase.database();