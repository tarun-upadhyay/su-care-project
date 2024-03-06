"use client";
import { signIn } from "next-auth/react";
import React from "react";
import { BsFacebook } from "react-icons/bs";

const LoginButton = () => {
  return (
    <>
      <button
        type="button"
        className="relative inline-flex w-full items-center justify-center rounded-md border bg-[#ce452b] border-gray-400 bg-rose-500 px-3.5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
        onClick={() => {
          return signIn("google", {
            redirect: true,
            callbackUrl: "/dashboard?token=false",
          });
        }}
      >
        <span className="mr-2 inline-block">
          <svg
            className="h-6 w-6 text-white-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
          </svg>
        </span>
        Sign in with Google
      </button>

      <button
        type="button"
        className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400  px-3.5 py-2.5 font-semibold text-white transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-nonetext-white bg-[#426bc6] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 "
        onClick={() => {
          return signIn("facebook", {
            redirect: true,
            callbackUrl: "/dashboard?token=false",
          });
        }}
      >
        <span className="mr-2 inline-block">
          <BsFacebook className="h-6 w-6 text-white-500" />
        </span>
        Sign in with Facebook
      </button>
    </>
  );
};

export default LoginButton;
