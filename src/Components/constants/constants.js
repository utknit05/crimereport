import firebase from "firebase";

export const CHANGE_PoliceStationID = 'CHANGE_PoliceStationID';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const SIGNOUT = 'SIGNOUT';
export const SIGNIN = 'SINGIN';
export const LOADING = 'LOADING';
export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const CHANGE_AUTH_STATE = 'CHANGE_AUTH_STATE';

const config = {
  apiKey: "AIzaSyBmyEy8LKxIrKFSZ9NLmYab25Otk9CnjI4",
  authDomain: "newapp-2b8ac.firebaseapp.com",
  databaseURL: "https://newapp-2b8ac.firebaseio.com",
  projectId: "newapp-2b8ac",
  storageBucket: "newapp-2b8ac.appspot.com",
  messagingSenderId: "1084743610678",
  appId: "1:1084743610678:web:6eb1ef1d47be33d45a0397"
};

firebase.initializeApp(config);
export var auth = firebase.auth();
export var database = firebase.database();