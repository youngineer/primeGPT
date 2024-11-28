import React, { useState, useRef } from "react";
import { LOGIN_PAGE_LOGO } from "../utils/constants";
import { checkIsValid } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState();
  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonClick = () => {
    // console.log(`isEmailValid: ${email.current.value}; isPasswordValid: ${password.current.value}`);
    console.log(checkIsValid(email, password));
    const message = checkIsValid(email, password);
    setErrorMessage(message);

  }

  const email = useRef();
  const password = useRef();

  return (
    <div className="flex justify-center items-center m-2">
      <div className="p-8 w-1/3">
        <div className="flex items-center justify-center mb-4">
          <img
            src={LOGIN_PAGE_LOGO}
            alt="PrimeGPT Logo"
            className="h-12 mr-2"
          />
        </div>
        <div className="border-2 border-slate-300 rounded-lg p-4 justify-start">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              checkIsValid(email, password);
            }}
          >
            <h2 className="text-xl font-bold text-center mb-4">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <>
                <p className="font-bold text-center">Full name:</p>
                <input
                  type="text"
                  className="border-2 border-gray-700 rounded-lg p-4 w-full my-2"
                />
              </>
            )}
            <p className="font-bold text-center">
              Email or mobile phone number:
            </p>
            <input
              ref={email}
              type="email"
              className="border-2 border-gray-700 rounded-lg p-4 w-full my-2"
            />
            <p className="font-bold text-center">Password:</p>
            <input
              ref={password}
              type="password"
              className="border-2 border-gray-700 rounded-lg p-4 w-full my-2"
            />
            <p className="font-semibold text-red-700">{errorMessage}</p>
            <button
              className="bg-yellow-400 text-black font-bold rounded-lg px-6 py-4 mt-4 w-full"
              type="submit" onClick={handleButtonClick}
            >
              Continue
            </button>
            <div className="text-sm mt-4 text-center">
              <button
                className="text-blue-600 hover:"
                onClick={toggleSignIn}
              >
                {isSignIn ? "Create a new account" : "Already a user? Login"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
