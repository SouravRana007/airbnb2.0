import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Validation from "../lib/validation";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function Signup() {
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const handleOnchange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const router = useRouter();
  const registerUser = async (e) => {
    // console.log("register clicker");
    e.preventDefault();
    setError(Validation(formData));
    console.log(formData);
    // if (Object.keys(error).length > 0) {
    //   setError(error);
    // } else {
    //   // Perform form submission logic here
    //   console.log(formData);
    //   // Reset form after submission if needed
    setformData({
      name: "",
      email: "",
      age: "",
    });
    setError({
      name: "",
      email: "",
      age: "",
    });
    // }
    try {
      // const data = {
      //   name: "gaurav",
      //   email: "gaurav",
      //   password: "gaurav",
      // };
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("User created successfully!");
        router.push("/login");
      } else {
        throw new Error();
      }
    } catch (err) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <>
      <Header />
      <section className=" bg-white">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          {/* <p className="pb-6 md:inline lg:text-3xl font-bold text-gray-600 hover:text-red-500 ">
            Become a Host
          </p> */}
          <div className="flex mt-10 py-3 px-6 h-20 hover:scale-105 transform transition duration-300 ease-out mx-auto hover:bg-red-500 hover:text-white hover:shadow:xl text-red-500 font-bold rounded-xl border-2 border-red-500 bg-white items-center w-50 cursor-pointer my-auto">
            {/* <Image
              className=" h-3 w-4 "
              src="https://links.papareact.com/qd3"
              layout="fill"
              // objectFit="contain"
              // objectPosition="center"
              alt="logo"
            /> */}
            <p className="font-bold "> AirBnb - Become a Host</p>
          </div>

          <div className="w-full bg-white rounded-xl shadow:xl  hover:shadow-2xl border-2 md:mt-0 sm:max-w-md xl:p-0 my-3 border-red-400">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 mt-20">
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-700 md:text-2xl ">
                Create your account
              </h1>
              <form
                method="POST"
                action="/api/register"
                className="space-y-4 md:space-y-6 active:scale-105 transform transition duration-300 ease-out"
                onSubmit={registerUser}
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-700 "
                  >
                    Your Name
                  </label>
                  <input
                    value={formData.name}
                    onChange={handleOnchange}
                    type="text"
                    name="name"
                    className=" border border-red-400 text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white :border-gray-600 placeholder-gray-500  "
                    placeholder="Fullname"
                    required
                  />
                  {error.name && <p>{error.name}</p>}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-700 "
                  >
                    Your email
                  </label>
                  <input
                    value={formData.email}
                    onChange={handleOnchange}
                    type="email"
                    name="email"
                    required
                    className=" border border-red-400 text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white :border-gray-600 placeholder-gray-500  "
                    placeholder="name123@gmail.com"
                  />
                  {error.email && (
                    <p className="text-red-500"> {error.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700 "
                  >
                    Password
                  </label>
                  <input
                    value={formData.password}
                    onChange={handleOnchange}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    className=" border  text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-red-600 placeholder-gray-400 "
                  />
                  {error.password && <p className="p"> {error.password}</p>}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-700 active:text-red-500"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline  hover:text-red-500 dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  // onClick={registerUser}
                  type="submit"
                  className="w-full  text-white bg-red-500 hover:scale-105 transform transition duration-300 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign up
                </button>

                {/* <p
                    // onClick={signup}
                   
                  >
                    Sign in
                  </p> */}
                {/* <Link
                    href="/signup"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-red-500"
                  >
                    sign-in
                  </Link> */}
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Signup;
