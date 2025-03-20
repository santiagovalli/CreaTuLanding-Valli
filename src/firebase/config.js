import { initializeApp} from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcpXor5RGYEcdhJPPdk8Tm0HfNnNXLZpw",
  authDomain: "coder-reactjs-valli.firebaseapp.com",
  projectId: "coder-reactjs-valli",
  storageBucket: "coder-reactjs-valli.firebasestorage.app",
  messagingSenderId: "260606121027",
  appId: "1:260606121027:web:437525d9db6ef6223c70f6"
};

export const app = initializeApp(firebaseConfig);
