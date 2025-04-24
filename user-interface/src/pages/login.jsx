import React from "react";
import { useState } from "react";
// import img1 from "../assets/img1.png";
import Navbar from "../components/Navbar";
import { loginFunction } from "../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Toastnotification from "../utils/Toastnotification";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = Toastnotification();
  const state = useSelector((state) => state.auth);
  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = {
      email,
      password,
    };
    console.log(fromData);
    dispatch(loginFunction(fromData, showToast, navigate));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white relative overflow-hidden">
          <h2 className="text-3xl font-bold mb-2">WELCOME</h2>
          <h3 className="text-lg font-semibold mb-4">YOUR HEADLINE NAME</h3>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700 rounded-full -mb-16 -ml-16"></div>
          <div className="absolute top-1/2 right-0 w-40 h-40 bg-blue-700 rounded-full -mt-20 translate-x-1/2"></div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">LOGIN</h2>
            <p className="text-sm text-gray-500 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>

            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Email</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="pl-10 w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Password</label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <i className="fas fa-lock"></i>
                </span>
                <input
                  type="password"
                  className="pl-10 pr-20 w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <label className="flex items-center text-sm">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-800 text-white font-bold rounded-lg mb-4"
            >
              Login
            </button>

            <div className="relative text-center mb-4">
              <span className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-gray-300"></span>
              <span className="relative px-4 bg-white text-sm text-gray-500">
                Or
              </span>
            </div>

            <button
              type="button"
              className="w-full py-2 border border-gray-400 font-semibold rounded-lg"
            >
              Sing in with other
            </button>

            <p className="text-sm text-center mt-6 text-gray-500">
              Don’t have an account?{" "}
              <a href="#" className="text-blue-600 font-medium">
                Sign Up
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
