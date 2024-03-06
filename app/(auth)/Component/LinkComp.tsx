"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const LinkComp = () => {
  const pathname = usePathname();

  if (pathname === "/login") {
    return (
      <>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mr-1 p-1">
          Don&apos;t have an account?
          <Link
            href={"/register"}
            className="font-semibold text-black transition-all duration-200 hover:underline"
          >
            Create a free account
          </Link>
        </p>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-center text-2xl font-bold leading-tight text-black">
          Looks like you&apos;re new here!
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600 mr-1 p-1">
          Existing User?
          <Link
            href={"/login"}
            className="font-semibold text-black transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
      </>
    );
  }
};

export default LinkComp;
