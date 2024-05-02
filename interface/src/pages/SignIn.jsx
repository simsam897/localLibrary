import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "flowbite-react";
import { Alert } from "@mui/material";
import OAuth from "../componenets/OAuth";
export default function SignIn() {
  const [formData, setFormData] = useState({});
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error: errorMessage } = userState || {
    loading: false,
    error: null,
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return dispatch(signInFailure("Please fill out all fields"));
    }

    try {
      dispatch(signInStart());

      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        //setErrorMessage(data.message)
        dispatch(signInFailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate("/dashboard?tab=dashboard");
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <>
      <section className="flex flex-col md:flex-row h-screen items-center">
        <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
          <img
            src="https://as2.ftcdn.net/v2/jpg/05/18/78/09/1000_F_518780968_6nOXsGf9COEhu2NXAI2F2SOOkScxk3AP.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div
          className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
        flex items-center justify-center"
        >
          <div className="w-full h-100">
            <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
              Sign In to your account
            </h1>

            <form className="mt-6" onSubmit={handleSubmit}>
              {errorMessage && (
                <Alert className="mt-5" color="failure">
                  {errorMessage}
                </Alert>
              )}
              <div>
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  name=""
                  id="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                  required
                  onChange={handleChange}
                />
              </div>

              <div className="mt-4">
                <label className="block text-gray-700"> Password</label>
                <input
                  type="password"
                  name=""
                  id="password"
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                focus:bg-white focus:outline-none"
                  required
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
              px-4 py-3 mt-6"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Sign In"
                )}
              </button>
              <hr className="my-4 border-gray-300 w-full" />
              <OAuth />
            </form>

            <hr className="my-4 border-gray-300 w-full" />
            <p>
              Don't have an account?{" "}
              <a
                href="/signup"
                className="text-blue-500 hover:text-blue-700 font-semibold"
              >
                Sign Up
              </a>
            </p>

            {errorMessage && (
              <Alert className="mt-5" color="failure">
                {errorMessage}
              </Alert>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
