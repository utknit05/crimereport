import firebase from "firebase";

export const CHANGE_PoliceStationID = 'CHANGE_PoliceStationID';
export const CHANGE_PASSWORD = 'CHANGE_PASSWORD';
export const SIGNOUT = 'SIGNOUT';
export const SIGNIN = 'SINGIN';
export const LOADING = 'LOADING';
export const CHANGE_ROUTE = 'CHANGE_ROUTE';
export const CHANGE_AUTH_STATE = 'CHANGE_AUTH_STATE';

const config = {
    apiKey: "AIzaSyCrBWUfe6cbR9ccr1ZA3HXeD9zcEMA4Ev4",
    authDomain: "thulla-5b5f2.firebaseapp.com",
    databaseURL: "https://thulla-5b5f2.firebaseio.com",
    projectId: "thulla-5b5f2",
    storageBucket: "thulla-5b5f2.appspot.com",
    messagingSenderId: "500975499435",
    appId: "1:500975499435:web:9818d4417a198194689fee"
  };

firebase.initializeApp(config);
export var auth = firebase.auth();
export var database = firebase.database();