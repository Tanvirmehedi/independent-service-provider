import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.init";
import google from "../../image/google.png";

const Login = () => {
  const [email, setEmail] = useState("");

  const [signInWithGoogle, googleUser, , ,] = useSignInWithGoogle(auth);

  const [signInWithEmailAndPassword, user, , error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  let errorElement;

  if (error) {
    errorElement = (
      <p className="text-red-500 my-3">Error : {error?.message}</p>
    );
  }

  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  const handelGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="px-2">
      <ToastContainer />
      <div className=" md:w-1/3 mx-auto border px-10 py-4 rounded-lg">
        <h1 className="uppercase text-xl text-orange-300 font-extrabold">
          login
        </h1>
        <div>
          <form onSubmit={handelSubmit}>
            <div>
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded my-4 px-[5px] text-lg w-full"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <input
                className="border rounded my-4 px-[5px] text-lg w-full"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your password "
                required
              />
            </div>
            <button
              className="inline-block bg-orange-400 w-full rounded-md py-1 text-lg text-slate-50 uppercase font-semibold"
              type="submit"
            >
              Login
            </button>
          </form>
          {errorElement}
        </div>
        <div className="flex justify-center items-center my-3">
          <div className="h-[1px] w-1/2 bg-orange-200"></div>
          <div className="px-5">OR</div>
          <div className="h-[1px] w-1/2 bg-orange-200"></div>
        </div>
        <div>
          creating an account?
          <Link className="text-orange-400 px-1" to="/signup">
            Signup
          </Link>
        </div>
        <div>
          Forget Password?
          <button className="text-orange-400 px-1 my-3" onClick={resetPassword}>
            Reset Password
          </button>
        </div>

        <div className="my-6">
          <button
            onClick={handelGoogleSignIn}
            className="flex justify-center items-center bg-orange-300 w-full rounded-md py-1 text-lg text-slate-50 uppercase "
          >
            <img src={google} className="px-3" alt="google" />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
