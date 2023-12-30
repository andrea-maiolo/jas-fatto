import React, { useEffect, useState } from "react";
import { auth } from "../Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "firebase/compat/app";
import { GoSignOut } from "react-icons/go";

const GoogleLogin = () => {
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
    <div>
      {user ? (
        <div>
          <SignOut />
          <p>User ID: {userID}</p>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

const Login = () => {
  const [error, setError] = useState("");
  const handleLogin = async () => {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const userCredential = await firebase.auth().signInWithPopup(provider);
    } catch (error) {
      setError(error);
    }
  };

  if (error) {
    return (
      <div>
        <p>an error occured</p>
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
  return (
    auth.currentUser && (
      <div>
        <button>sign out</button>
        <GoSignOut />
      </div>
    )
  );
}

export default GoogleLogin;
