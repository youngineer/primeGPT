import React, { useState } from "react";
import { LOGIN_PAGE_LOGO } from "../utils/constants";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
    setErrorMessage(""); 
  };

  const handleButtonClick = (e) => {
    e.preventDefault(); // Prevent form submission

    const validationMessage = checkValidData(email, password);
    if (validationMessage) {
      setErrorMessage(validationMessage);
      return;
    }

    if (!isSignIn) {
      // Sign Up Logic
      if (!name.trim()) {
        setErrorMessage("Full name is required");
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: "https://avatars.githubusercontent.com/u/116344276?v=4"
          })
            .then(() => {
              console.log(user);
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.message);
        });
    }
  };

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
          <form onSubmit={handleButtonClick}>
            <h2 className="text-xl font-bold text-center mb-4">
              {isSignIn ? "Sign In" : "Sign Up"}
            </h2>
            {!isSignIn && (
              <>
                <p className="font-bold text-center">Full name:</p>
                <input
                  type="text"
                  className="border-2 border-gray-700 rounded-lg p-4 w-full my-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </>
            )}
            <p className="font-bold text-center">Email or mobile phone number:</p>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="border-2 border-gray-700 rounded-lg p-4 w-full my-2"
            />
            <p className="font-bold text-center">Password:</p>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="border-2 border-gray-700 rounded-lg p-4 w-full my-2"
            />
            {errorMessage && <p className="font-semibold text-red-700">{errorMessage}</p>}
            <button
              className="bg-yellow-400 text-black font-bold rounded-lg px-6 py-4 mt-4 w-full"
              type="submit"
            >
              Continue
            </button>
            <div className="text-sm mt-4 text-center">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 transition duration-200"
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
