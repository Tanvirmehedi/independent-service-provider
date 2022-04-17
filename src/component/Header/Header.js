import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../image/logo.png";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  const logout = () => {
    signOut(auth);
  };
  return (
    <header className="sticky top-0 z-40 bg-orange-100 mb-10">
      <nav className="container mx-auto">
        <div className=" flex justify-between items-center">
          <div className="logo w-[20%] md:w-[10%]">
            <Link className="p-0" to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div
            className={`md:flex md:top-0 md:relative z-50 ${
              !open ? "hidden" : "absolute top-14 bg-orange-100 w-full py-5"
            }`}
          >
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/service">Service</CustomLink>
            <CustomLink to="/blog">Blog</CustomLink>
            <CustomLink to="/about">About</CustomLink>
            <Link
              to="/checkout"
              className="text-orange-50 font-bold border bg-orange-400 rounded-md py-1 px-2 md:flex items-center justify-center inline-block"
            >
              CheckOut
            </Link>

            {!user ? (
              <CustomLink to="/login">LogIn </CustomLink>
            ) : (
              <button className="ml-2" onClick={logout}>
                Logout{" "}
              </button>
            )}
          </div>

          <div
            className="hamburger-menu md:hidden mr-5"
            onClick={() => setOpen(!open)}
          >
            {!open ? <MenuIcon height={30} /> : <XIcon height={30} />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
