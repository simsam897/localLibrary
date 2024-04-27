// import { useContext, useState } from "react";
// import AuthContext from "../contacts/AuthProvider";
import { Alert } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  // const authContext = useContext(AuthContext);
  // const createUser = authContext?.createUser;
  // const [error, serError] = useState("error");

  // const handleSignUpPage = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const email = form.email.value;

  //   const password = form.password.value;

  //   // console.log(email, username, password);

  //   createUser &&
  //     createUser(email, password)
  //       .then((userCredential) => {
  //         // Signed up
  //         const user = userCredential.user;
  //         // ...
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;
  //         serError(errorMessage);
  //         // ..
  //       });
  // };

  // // const email = event.target.email.value;
  // // const username = event.target.username.value;
  // // const password = event.target.password.value;

  //some functionality
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState([null]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("All fields are required");
    }
    try {
      setLoading(true);
      setErrorMessage(null);

      const res = await fetch("api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success === false) {
        return setErrorMessage(data.message);
      }

      setLoading(false);

      if (res.ok) {
        return navigate("/Signin");
      }
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  return (
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
            Sign up to your account
          </h1>

          <form className="mt-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="username"
                className="block text-gray-700 username"
              >
                username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700">
                Email Address{" "}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mt-4">
              <label htmlFor="password" className="block text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter Password"
                minLength="6"
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
            >
              {loading ? (
                <>
                  <Spinner size="sm" /> <span className="pl-3">Loading..</span>
                </>
              ) : (
                "sign Up"
              )}
            </button>
          </form>

          <hr className="my-6 border-gray-300 w-full" />

          <button
            type="button"
            className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg
                  px-4 py-3"
          >
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Sign up with Google</span>
            </div>
          </button>

          <p className="mt-8">
            Already have an account?
            <a
              href="/signin"
              className="text-blue-500 hover:text-blue-700 font-semibold"
            >
              Sign in
            </a>
          </p>
          {/* {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )} */}
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
