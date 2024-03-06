"use client";
import axios, { Axios } from "axios";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", href: "/dashboard" },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  { name: "Contact Us", href: "/contact" },
];
const loginDetails = [
  { name: "Login", href: "/login" },
  { name: "Sign up", href: "/register" },
];
interface Props {
  renderTo: string;
  classCss: string;
  session: any;
}
const NavbarLinks: React.FC<Props> = ({ renderTo, classCss, session }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  if (session && searchParams?.get("token")) {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: session.user.email }),
    };

    fetch("/backend/api/v1/auth/platforms", requestOptions)
      .then((res) => res.json())
      .then(() => router.push("/dashboard"))
      .catch((err) => console.log(err));
  }
  if (renderTo === "navigationLink") {
    return (
      <>
        {links.map((link) => {
          return (
            <li
              key={link.name}
              className={clsx(`${classCss}`, {
                "font-extrabold text-t-blue": pathname === link.href,
              })}
            >
              <Link href={link.href} scroll={true}>
                {" "}
                {link.name}
              </Link>
            </li>
          );
        })}
      </>
    );
  } else if (renderTo === "userCredentials") {
    return (
      <>
        {loginDetails.map((link) => {
          return (
            <li
              key={link.name}
              className={clsx(`${classCss}`, {
                "font-bold text-t-blue": pathname === link.href,
              })}
            >
              <Link href={link.href} scroll={true}>
                {link.name}
              </Link>
            </li>
          );
        })}
      </>
    );
  } else {
    return (
      <li className={`${classCss}`}>
        <Link href={"/login"} scroll={true}>
          Login
        </Link>
      </li>
    );
  }
};

export default NavbarLinks;
