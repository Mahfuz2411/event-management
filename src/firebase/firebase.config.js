import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAlGD-vvLAcyKQn0YhJdfOvLLdJm_rE-OY",
  authDomain: "event-management-b4c54.firebaseapp.com",
  projectId: "event-management-b4c54",
  storageBucket: "event-management-b4c54.appspot.com",
  messagingSenderId: "179391363945",
  appId: "1:179391363945:web:4ccc6d5902d8bd9ef55bf8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;