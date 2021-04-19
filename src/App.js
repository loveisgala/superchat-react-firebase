import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyD4YpKhetuWpBRpDmxYYypmvDNiFVo28hk",
  authDomain: "superchat-react-c98f6.firebaseapp.com",
  projectId: "superchat-react-c98f6",
  storageBucket: "superchat-react-c98f6.appspot.com",
  messagingSenderId: "805678973713",
  appId: "1:805678973713:web:5271192c1137ca63e442b0",
  measurementId: "G-319JLHCHTZ"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = userAuthState(auth);

  return (
    <div className="App">
      <header className="App-header">

      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut() {
  return auth.currentUser && (

    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() {

}

export default App;
