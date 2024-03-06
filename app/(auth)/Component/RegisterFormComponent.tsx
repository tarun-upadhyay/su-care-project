"use client";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import { redirect, useRouter, useSearchParams } from "next/navigation";

import { useFormik } from "formik";
import { emailSignup } from "@/validator/userDetails";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";

interface IntialValues {
  email: string;
  name: string;
  phone: string;
  password: string;
}
const initalState: IntialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
};

const RegisterFormComponent = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const params = useSearchParams();
  const notify = (msg: string) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      return router.push("/login");
    }, 10000);
  };
  async function handleSubmit(values: any) {
    setLoading(true);

    try {
      await axios
        .post(`/backend/api/v1/auth/register`, values)
        .then((res) => {
          signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: true,
            callbackUrl: "/dashboard",
          });
          setLoading(false);

          return res.data.user;
        })
        .catch((err) => {
          setLoading(false);
          if (err.response.data) {
            notify(err.response.data.msg);
          }
        });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  const formik = useFormik({
    initialValues: initalState,
    validationSchema: emailSignup,
    onSubmit: handleSubmit,
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <form onSubmit={formik.handleSubmit} className="mt-4">
        <div className="space-y-5 font-baijam font-bold">
          <div>
            <label
              htmlFor=""
              className="text-base word-spacing-2 text-gray-900"
            >
              {" "}
              Name{" "}
            </label>
            <div className="mt-2 ">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="name"
                placeholder="Your name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
              ></input>
              {formik.errors.name && formik.touched.name && (
                <span className="text-red-600 pl-2 text-sm">
                  {formik.errors.name}
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="text-base word-spacing-2 text-gray-900"
            >
              {" "}
              Phone number{" "}
            </label>
            <div className="mt-2 ">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                placeholder="+91 - 9891214881"
                name="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
              ></input>
              {formik.errors.phone && formik.touched.phone && (
                <span className="text-red-600 pl-2 text-sm">
                  {formik.errors.phone}
                </span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor=""
              className="text-base word-spacing-2 text-gray-900"
            >
              {" "}
              Email address{" "}
            </label>
            <div className="mt-2 ">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="email"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
              ></input>
              {formik.errors.email && formik.touched.email && (
                <span className="text-red-600 pl-2 text-sm">
                  {formik.errors.email}
                </span>
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor=""
                className="text-base word-spacing-2 text-gray-900"
              >
                {" "}
                Password{" "}
              </label>
            </div>
            <div className="mt-2">
              <input
                className="flex h-10 w-full rounded-md border border-gray-600 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              ></input>
              {formik.errors.password && formik.touched.password && (
                <span className="text-red-600 pl-2 text-sm">
                  {formik.errors.password}
                </span>
              )}
            </div>
          </div>
          <div>
            <button
              type="submit"
              className={`inline-flex w-full items-center justify-center rounded-md  px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80  ${
                loading
                  ? "bg-gray-600 cursor-not-allowed opacity-50"
                  : "bg-black"
              }`}
              disabled={loading}
            >
              {loading ? "Processing.." : "Register"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default RegisterFormComponent;
