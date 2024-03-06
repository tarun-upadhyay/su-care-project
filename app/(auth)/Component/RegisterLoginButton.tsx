"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

const RegisterLoginButton = () => {
  return (
    <>
      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-full border bg-[#ffff] border-gray-400 bg-rose-500 px-3.5 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        onClick={() => {
          return signIn("google", {
            redirect: false,
            callbackUrl: "/dashboard?token=flase",
          });
        }}
      >
        <span>
          <FcGoogle className="h-7 w-7 text-white-500" />
        </span>
      </button>

      <button
        type="button"
        className="relative inline-flex items-center justify-center rounded-full border border-gray-400  px-3.5 py-3.5 font-semibold text-white transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-nonetext-white bg-[#426bc6] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50"
        onClick={() => {
          return signIn("facebook", {
            callbackUrl: "/dashboard?token=flase",
            redirect: false,
          });
        }}
      >
        <span className="">
          <BsFacebook className="h-7 w-7 text-white-500" />
        </span>
      </button>
    </>
  );
};

export default RegisterLoginButton;
