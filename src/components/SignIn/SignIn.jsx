import { Link } from "react-router-dom";
import {FcGoogle} from 'react-icons/fc';
import {AiFillGithub} from 'react-icons/ai';
import {BsFacebook} from 'react-icons/bs'

import { GoogleAuthProvider, signInWithPopup, getAuth, GithubAuthProvider } from "firebase/auth";
import app from "../../fire-base/firebase.init";
import { useState } from "react";



const SignIn = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);

    // Google authantication
    const provider = new GoogleAuthProvider()
    const handleWithGoogle = () => { 
        signInWithPopup(auth,provider)
        .then(result => setUser(result.user))
        .catch(err => console.log(err.message))
    }

    // Github authantication
    const gitProvider = new GithubAuthProvider();
    const handlewithGithub = () => { 
        signInWithPopup(auth,gitProvider)
        .then(result => setUser(result.user))
        .catch(err => console.log(err.message))
     }
    console.log(user)


  return (
    <div className="my-36 flex flex-col justify-center items-center ">
      <div className="w-[430px] h-[633px] absolute rounded-lg -z-10 bg-[#FFE0B3]"></div>
      <div className="w-[451px] rounded-lg z-10 relative -right-7 -top-7 bg-white border-2 border-[#95A0A7] py-5">
        <div className="flex flex-col items-center w-full">
            <h3 className="text-3xl">Sign Up</h3>
            <div className="w-5/6 space-y-4">
                <p className="text-base font-normal text-[#2A414F]">Email: </p>
                <input type="email" name="" id=""  className="border-2 border-[#95A0A7] rounded-md h-14 w-4/5"/>
                <p className="text-base font-normal text-[#2A414F]">Password: </p>
                <input type="password" name="" id="" className="border-2 border-[#95A0A7] rounded-md h-14 w-4/5" />
                <p className="text-base font-normal text-[#2A414F]">Confirm Password: </p>
                <input type="password" name="" id=""  className="border-2 border-[#95A0A7] rounded-md h-14 w-4/5"/>
                <button className="btn w-full bg-[#FFE0B3]">Log In</button>
                <p className="text-base font-normal text-[#2A414F]">Already have account? <Link to='/login/login' className="text-yellow-400">Login</Link></p>
                <div className="flex justify-center items-center"><p>or</p></div>
                <button onClick={handleWithGoogle} className="btn w-full bg-"><FcGoogle className="text-3xl"></FcGoogle> Continue with Google</button>
                <button onClick={handlewithGithub} className="btn w-full bg-"><AiFillGithub className="text-3xl"></AiFillGithub> Continue with Git-hub</button>
                <button className="btn w-full bg-"><BsFacebook className="text-3xl"></BsFacebook> Continue with Facebook</button>

            </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
