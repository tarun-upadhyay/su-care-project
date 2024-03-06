import Image from "next/image";
import Link from "next/link";
import React from "react";
import LinkComp from "./Component/LinkComp";
import { useSearchParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[7rem] p-5 pb-2 h-screen">
      <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
        <div className="mb-2 flex justify-center">
          <Image
            src={
              "/Logo.png"
            }
            alt="logo"
            width={162}
            height={46}
            className="h-[2.5rem] w-[auto]"
          />
        </div>

        <LinkComp />
      </div>
      {children}
    </div>
  );
}
