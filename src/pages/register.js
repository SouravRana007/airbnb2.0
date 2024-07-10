import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
function register() {
  const storeweb = () => {
    window.location.href = "https://www.airbnb.co.in/host/homes";
  };
  return (
    <>
      <Header />
      <section className=" bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="pb-6 md:inline lg:text-3xl font-bold text-gray-600 hover:text-red-500 ">
            Become a Host
          </p>
          <Image
            className="w- h-8 mr-2 pt-34"
            src="/logo.jpeg"
            width={50}
            height={800}
            alt="logo"
          />

          <div className="w-full bg-white rounded-xl shadow:xl  hover:shadow-2xl border-2 md:mt-0 sm:max-w-md xl:p-0  border-red-400">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-700 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-700 "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className=" border border-red-400 text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white :border-gray-600 placeholder-gray-500  "
                    placeholder="name123@gmail.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-700 "
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className=" border  text-gray-600 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  border-red-600 placeholder-gray-400 "
                    required=""
                  />
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
                        for="remember"
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
                  type="submit"
                  onClick={storeweb}
                  className="w-full text-gray-700 hover:text-white hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-700">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-red-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default register;
