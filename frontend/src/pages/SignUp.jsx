import React from "react";
import SignUpHero from "../components/Signup/SignUpHero";
import SignUpForm from "../components/Signup/SignUpForm";
import SignUpBenefits from "../components/Signup/SignUpBenefits";

const SignUp = () => {
  return (
    <>
      <main className="min-h-screen w-full bg-black flex items-center justify-center p-4 sm:p-6 lg:p-14">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2  items-stretch">
          {}
          <div className=" lg:flex w-full h-full">
            <SignUpHero />
          </div>

          {}
          <div className="w-full flex items-center justify-center">
            <SignUpForm />
          </div>
        </div>
      </main>
      <SignUpBenefits />
    </>
  );
};

export default SignUp;
