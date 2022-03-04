import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useState, useEffect } from 'react';

const firebaseConfig = {
    apiKey: "AIzaSyDlgxUccmL8lJJH97-B6mIv17r6R3H1vd4",
    authDomain: "dashboard-c6c76.firebaseapp.com",
    projectId: "dashboard-c6c76",
    storageBucket: "dashboard-c6c76.appspot.com",
    messagingSenderId: "750224260255",
    appId: "1:750224260255:web:3510a94e0453a1ad49f6aa",
    measurementId: "G-MYKF8E8VW7"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app)

export { auth }

export function signin(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
}

export function logOut() {
    return signOut(auth);
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (userAuth) => setCurrentUser(userAuth));
        return unsub;
    }, [])
    return currentUser;
}