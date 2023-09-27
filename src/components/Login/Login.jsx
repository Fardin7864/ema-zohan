import { useState } from "react";
import app from "../../fire-base/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((user) => setUser(user.user))
      .catch((err) => console.log(err.message));
  };
  const handleSignOut = () =>{
    signOut(auth)
    .then(result => setUser(null))
    .catch(err => console.log(err.message))
  }
  const { displayName , email, photoURL } = user || {};
console.log(user?.displayName, user?.email)

  return (
    <div>
        {
          !user && <button onClick={handleLogin} className="btn">Google Login</button> || <button onClick={handleSignOut} className="btn">Sign Out</button> 
        }

      { user &&
            <div>
            <h5>Name: {displayName}</h5>
            <p>E-mail: {email}</p>
            <div>
                <img src={photoURL} alt="" />
            </div>
          </div>
      }
    </div>
  );
};

export default Login;
