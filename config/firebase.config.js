import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB8_2XqJLnN66KGza8lAJR8kHsNa6ABg9A",
  authDomain: "v-chat-application-9246f.firebaseapp.com",
  projectId: "v-chat-application-9246f",
  storageBucket: "v-chat-application-9246f.appspot.com",
  messagingSenderId: "999551678471",
  appId: "1:999551678471:web:be26ca3fd9add0781dd2a2",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// const firebaseAuth = getAuth(app);
const firestoreDB = getFirestore(app);

// 
const firebaseAuth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export { app, firebaseAuth, firestoreDB};
