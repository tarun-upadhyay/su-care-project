import { emailLogin } from "@/validator/userDetails";
import { useFormik } from "formik";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import SignInFormComponent from "../Component/SignInFormComponent";
import { BsFacebook } from "react-icons/bs";
import Skeleton from "react-loading-skeleton";
import { signIn } from "next-auth/react";
import LoginButton from "../Component/LoginButton";
interface InitialValues {
  email: string;
  password: string;
}
const initalState: InitialValues = {
  email: "",
  password: "",
};
const Page = () => {
  return (
    <main className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md h-screen">
      <Suspense fallback={<Skeleton count={5} width={100} />}></Suspense>
      <SignInFormComponent />
      <p className="my-3 text-center font-baijam font-bold">-- OR --</p>
      <div className="mt-3 space-y-3">
        <LoginButton/>
     
      </div>
    </main>
  );
};

export default Page;
