// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { firebaseConfig } from "@/private";

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app

