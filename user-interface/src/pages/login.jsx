import React from "react";
import { useState } from "react";

import Navbar from "../components/Navbar";
import { loginFunction } from "../redux/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import Toastnotification from "../utils/Toastnotification";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); 

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { showToast } = Toastnotification();
  const state = useSelector((state) => state.auth);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = {
      email,
      password,
      role,
    };

    dispatch(loginFunction(fromData, showToast, navigate));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-800 flex items-center justify-center">
      <div className="relative bg-white rounded-2xl shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Side */}
        <div className="w-1/2 flex justify-start items-center  bg-gradient-to-br from-blue-600 to-blue-800 p-10 text-white relative overflow-hidden">
          <div>
            <h2 className="text-3xl font-bold mb-2">WELCOME</h2>
            <h3 className="text-lg font-semibold mb-4">Back to ElevateHub!</h3>
            <p className="text-sm leading-relaxed">
              Your journey to success continues here. <br />
              Login and unlock new mentorship opportunities, exclusive
              internships, and career events.
            </p>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-700 rounded-full -mb-16 -ml-16"></div>
            <div className="absolute top-1/2 right-0 w-40 h-40 bg-blue-700 rounded-full -mt-20 translate-x-1/2"></div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-1/2 p-10 flex flex-col justify-center">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">LOGIN</h2>
            <p className="text-sm text-gray-500 mb-6">
              Sign in to grow, connect, and achieve.
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

            <div className="mb-4">
              <label className="block mb-1 text-gray-700">Login As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none"
              >
                <option value="student">Student</option>
                <option value="mentor">Mentor</option>
              </select>
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
              <Link to="/sign-up">
              <a href="#" className="text-blue-600 font-medium">
                Sign Up
              </a>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
