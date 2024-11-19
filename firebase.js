import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCFG41ETglKWAhqcl4BVtK5VxYoq-Qcpbs",
    authDomain: "geoguessr-e030a.firebaseapp.com",
    projectId: "geoguessr-e030a",
    storageBucket: "geoguessr-e030a.appspot.com",
    messagingSenderId: "839702612866",
    appId: "1:839702612866:web:78398f82cdbc46af9d5d9b",
    measurementId: "G-H3K8D4KPTM"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
