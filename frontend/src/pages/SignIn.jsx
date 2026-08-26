import React from "react";
import SignInHero from "../components/SignIn/SignInHero";
import SignInForm from "../components/SignIn/SignInForm";

const SignIn = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-black flex items-center justify-center p-4 sm:p-6 lg:p-14">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2  items-stretch">
          {}
          <div className=" lg:flex w-full h-full">
            <SignInHero />
          </div>

          {}
          <div className="w-full flex items-center justify-center">
            <SignInForm />
          </div>
        </div>
      </main>
    </>
  );
};

export default SignIn;
