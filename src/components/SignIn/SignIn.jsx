import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import app from "../../fire-base/firebase.init";
import { useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState();
  const [successMsg, setSuccessMsg] = useState();
  const auth = getAuth(app);
  // setErrorMsg('');
  // Google authantication
  const provider = new GoogleAuthProvider();
  const handleWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err.message));
  };
  // Github authantication
  const gitProvider = new GithubAuthProvider();
  const handlewithGithub = () => {
    signInWithPopup(auth, gitProvider)
      .then((result) => setUser(result.user))
      .catch((err) => console.log(err.message));
  };
  // Email authantication
  // console.log(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (password.length < 6) {
      
      setErrorMsg('Password must be 6 charectar or more!')
      return;
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setUser(result.user);
        setSuccessMsg('Please check you email and veryfi it!')
        sendEmailVerification(auth.currentUser)
        .then(result => {
          console.log(result, 'email send')
        })
        e.target.email.value = '';
        e.target.password.value = '';
      })
      .catch(err => {
        console.log(err.message)
        e.target.password.value = '';
      })  

    }
  };
  console.log(user)

  return (
    <div className="my-36 flex flex-col justify-center items-center ">
      <div className="w-[430px] h-[633px] absolute rounded-lg -z-10 bg-[#FFE0B3]"></div>
      <div className="w-[451px] rounded-lg z-10 relative -right-7 -top-7 bg-white border-2 border-[#95A0A7] py-5">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center w-full">
            <h3 className="text-3xl">Sign Up</h3>
            <div className="w-5/6 space-y-4">
              <p className="text-base font-normal text-[#2A414F]">Email: </p>
              <input
                type="email"
                name="email"
                id=""
                required
                className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"
              />
              <p className="text-base font-normal text-[#2A414F]">Password: </p>
              <input
                type="password"
                name="password"
                id=""
                required
                className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"
              />
              {
                errorMsg && <p className="text-base font-normal text-red-600">{errorMsg}</p> || ''

              }
              {
                successMsg && <p className="text-base font-normal text-green-600">{successMsg}</p> || ''

              }
                {/* <input type="password" name="" id=""  className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"/> */}
              <input
                type="submit"
                name="submit"
                value="submit"
                className="btn w-full bg-[#FFE0B3]"
              />
              <p className="text-base font-normal text-[#2A414F]">
                Already have account?{" "}
                <Link to="/login/login" className="text-yellow-400">
                  Login
                </Link>
              </p>
              <div className="flex justify-center items-center">
                <p>or</p>
              </div>
              <button onClick={handleWithGoogle} className="btn w-full bg-">
                <FcGoogle className="text-3xl"></FcGoogle> Continue with Google
              </button>
              <button onClick={handlewithGithub} className="btn w-full bg-">
                <AiFillGithub className="text-3xl"></AiFillGithub> Continue with
                Git-hub
              </button>
              <button className="btn w-full bg-">
                <BsFacebook className="text-3xl"></BsFacebook> Continue with
                Facebook
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
