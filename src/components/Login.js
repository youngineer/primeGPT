import React from "react";
import Header from "./Header";
import { LOGIN_PAGE_LOGO } from "../utils/constants";

const Login = () => {
  return (
    <div className="flex justify-center items-center m-2">
      <div className=" p-8 w-1/3">
        <div className="flex items-center justify-center mb-4">
          <img
            src={LOGIN_PAGE_LOGO}
            alt="Prime Video Logo"
            className="h-12 mr-2"
          />
        </div>
        <div className="border-2 border-slate-300 rounded-lg p-4 justify-start">
        <h2 className=" text-xl font-bold text-center mb-4">Sign in</h2>
        <p className="font-bold text-center">Email or mobile phone number:</p>
        <input className="border-2 border-gray-700 rounded-lg p-4 w-full m-2" />
        <p className="font-bold text-center">Password:</p>
        <input className="border-2 border-gray-700 rounded-lg p-4 w-full m-2" />
        <button className="bg-yellow-400 text-black font-bold rounded-lg px-6 py-4 mt-4 w-full">
          Continue
        </button>
        <div className="text-sm mt-4 text-center">
          <a href="#" className="text-blue-600 hover:underline">
            Create your primeGPT account
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Login;
