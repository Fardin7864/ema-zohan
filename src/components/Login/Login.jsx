import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="my-36 flex flex-col justify-center items-center ">
      <div className="w-[451px] h-[451px] absolute rounded-lg -z-10 bg-[#FFE0B3]"></div>
      <div className="w-[451px] h-[451px] rounded-lg z-10 relative -right-7 -top-7 bg-white border-2 border-[#95A0A7] py-5">
        <div className="flex flex-col items-center w-full">
          <h3 className="text-3xl">Log In</h3>
          <div className="w-5/6 space-y-4">
            <p className="text-base font-normal text-[#2A414F]">Email: </p>
            <input
              type="email"
              name="email"
              id=""
              className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"
            />
            <p className="text-base font-normal text-[#2A414F]">Password: </p>
            <input
              type="password"
              name="password"
              id=""
              className="border-2 text-2xl border-[#95A0A7] rounded-md h-14 w-4/5"
            />
            <input
              type="submit"
              name="submit"
              className="btn w-full bg-[#FFE0B3]"
            />
            <p className="text-base font-normal text-[#2A414F]">
              New to this site ?{" "}
              <Link to="/login" className="text-yellow-400">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
