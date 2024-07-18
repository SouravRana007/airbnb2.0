import React, { useEffect, useState } from "react";
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function Login() {
  const { data: session } = useSession();

  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.name) {
      router.replace("/");
    }
  }, [session]);

  const redirectToSignup = () => {
    router.push("/signup");
  };

  const signInHandler = async (e) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      ...loginFormData,
    });
    console.log("signin result: ", result);
    if (result.ok) {
      toast.success("Signin successfully!");
      router.push("/");
    } else {
      toast.error(result.error);
    }
  };

  const handleInputChange = (e) => {
    console.log("e:", e.target);
    const inputName = e.target.name;
    const inputValue = e.target.value;

    setLoginFormData({
      ...loginFormData,
      [inputName]: inputValue,
    });
  };

  return (
    <>
      <Header />
      <section className=" bg-white">
        <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <p className="pb-6 md:inline lg:text-3xl font-bold text-gray-600 hover:text-red-500 ">
            AirBnb - Become a Host
          </p>
          {/* <div className="flex py-3 px-6 mx-auto text-red-500 font-bold rounded-xl border-2 border-red-500 bg-white items-center h-3 cursor-pointer my-auto">
             <Image
              className=" h-3 w-4 "
              src="https://links.papareact.com/qd3"
              layout="fill"
              // objectFit="contain"
              // objectPosition="center"
              alt="logo"
            />
          </div> */}

          <div className="w-full bg-white rounded-xl shadow:xl  hover:shadow-2xl border-2 md:mt-0 sm:max-w-md xl:p-0 my-3 border-red-400">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-semibold leading-tight tracking-tight text-gray-700 md:text-2xl ">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={signInHandler}>
                <div>
                  <label
                    htmlFor="email"
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
                    value={loginFormData.email}
                    onChange={handleInputChange}
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
                    required
                    value={loginFormData.password}
                    onChange={handleInputChange}
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
                  type="submit"
                  className="w-full  text-white bg-red-500 hover:scale-105 transform transition duration-300 focus:ring-4 focus:outline-none focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <div className=" flex justify-between text-sm font-light text-gray-700">
                  Don&apos;t have an account yet?{" "}
                  <div
                    onClick={redirectToSignup}
                    className=" cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500 hover:text-red-500"
                  >
                    Sign up
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
