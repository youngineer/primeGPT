import React, { useState, useEffect } from "react";
import { HEADER_LOGO, USER_LOGO } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginText, setLoginText] = useState("Login");
  const navigate = useNavigate();
  
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (user && user.email) {
      setLoginText("Sign Out");
    } else {
      setLoginText("Login");
    }
  }, [user]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        navigate("/error");
      });
  };

  return (
    <div className="flex justify-between items-center bg-sky-800 p-4 font-amazon">
      <Link to="/">
        <img src={HEADER_LOGO} className="h-10 rounded-lg" alt="Login_page_logo" />
      </Link>

      <div className="flex items-center space-x-8">
        <Link
          to="/browse"
          className="text-white hover:text-gray-300 transition duration-200"
        >
          Movies
        </Link>
        <Link
          to="/browse"
          className="text-white hover:text-gray-300 transition duration-200"
        >
          TV Shows
        </Link>

        {user && (
          <Link to="/" className="flex items-center">
            <img
              src={user.photoURL}
              alt="User Logo"
              className="h-8 w-8 rounded-full border-2 border-white"
            />
          </Link>
        // ) : (
        //   <Link to="/login" className="text-white hover:text-gray-300">
        //     Login
        //   </Link>
        )}

        {user ? (
          <Link to="/" className="flex items-center">
            <button
              onClick={handleSignOut}
              className="p-2 text-white bg-blue-500 hover:bg-white hover:text-blue-500 rounded-lg transition duration-200"
            >
              Sign Out
            </button>
          </Link>
        ) : (
          <Link to="/" className="flex items-center">
            <button className="p-2 text-white bg-blue-500 hover:bg-white hover:text-blue-500 rounded-lg transition duration-200">
              {loginText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
