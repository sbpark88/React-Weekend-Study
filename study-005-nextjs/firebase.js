// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "@/private";

// Your web app's Firebase configuration
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export default app

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth };
