// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';

// Configuration for the authentication Firebase project
const authFirebaseConfig = {
  apiKey: "AIzaSyD7v2Lu8R8TYwur1O8uH-casQWpGRGPNPI",
  authDomain: "aquasmart-cef93.firebaseapp.com",
  projectId: "aquasmart-cef93",
  storageBucket: "aquasmart-cef93.appspot.com",
  messagingSenderId: "540931324261",
  appId: "1:540931324261:web:ddbf91bd6643dcf826898c",
  measurementId: "G-8TSVZZYPLZ"
};

// Configuration for the sensor data Firebase project
const sensorDataFirebaseConfig = {
  apiKey: "AIzaSyBV6si-lgjhoFgjsKvyRg2N6JjGg6xDRCk",
  authDomain: "aquasmartsensordata.firebaseapp.com",
  databaseURL: "https://aquasmartsensordata-default-rtdb.firebaseio.com",
  projectId: "aquasmartsensordata",
  storageBucket: "aquasmartsensordata.appspot.com",
  messagingSenderId: "670544580889",
  appId: "1:670544580889:web:a5307f99efb8a63b753588",
  measurementId: "G-2VVVQ13WRK"
};

// Initialize the authentication Firebase app
const authApp = initializeApp(authFirebaseConfig);
const auth = getAuth(authApp);

// Initialize the sensor data Firebase app
const sensorDataApp = initializeApp(sensorDataFirebaseConfig, 'sensorDataApp');
const db = getDatabase(sensorDataApp);

export { auth, db };
