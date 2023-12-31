import React, { useState, useEffect } from "react";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import Cart from "./Components/Cart";
import { auth } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import { GoSignOut } from "react-icons/go";

function App() {
  const [user] = useAuthState(auth);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    if (!user) {
      return;
    }
    setUserID(user.uid);
  }, [user]);

  console.log(user);

  return (
    <div className="App">
      <h1>Jas fatto</h1>
      <div>
        {user ? (
          <div>
            <SignOut />
          </div>
        ) : (
          <Login />
        )}
      </div>
      <ProductList />
      {/* <ProductDetails /> */}
      {/* <Cart /> */}
    </div>
  );
}

const Login = () => {
  const [err, setErr] = useState("");

  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      setErr(error);
    }
  };

  if (err) {
    return (
      <div>
        <p>an error occurred</p>
      </div>
    );
  }

  return (
    <div className="googleLogin">
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
};

function SignOut() {
  console.log(auth);
  return (
    auth.currentUser && (
      <div>
        <button className="google-sign-out" onClick={() => auth.signOut()}>
          Sign out
        </button>
        <GoSignOut onClick={() => auth.signOut()} />
      </div>
    )
  );
}

export default App;
