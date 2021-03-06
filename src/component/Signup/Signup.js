import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../image/google.png";

const Signup = () => {
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();

  if (user || googleUser) {
    navigate("/");
  }

  const handelGoogleSignIn = () => {
    signInWithGoogle();
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };

  return (
    <div className="px-2">
      <div className=" md:w-1/3 mx-auto border px-10 py-4 rounded-lg">
        <h1 className="uppercase text-xl text-orange-300 font-extrabold">
          SignUp
        </h1>
        <div>
          <form onSubmit={handelSubmit}>
            <div>
              <input
                className="border rounded my-4 px-[5px] text-lg w-full"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
            </div>
            <div>
              <input
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
              SignUp
            </button>
          </form>
        </div>
        <div className="flex justify-center items-center my-3">
          <div className="h-[1px] w-1/2 bg-orange-200"></div>
          <div className="px-5">OR</div>
          <div className="h-[1px] w-1/2 bg-orange-200"></div>
        </div>
        <div>
          Already have an account?
          <Link className="text-orange-400 px-1" to="/login">
            Login
          </Link>
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

export default Signup;
