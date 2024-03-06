"use client";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import React, { FC } from "react";
interface TitleType {
  title: string;
}

const HomepageButtonComp: FC<TitleType> = ({ title }) => {
  return (
    <div>
      <Link href="/booking">
        <Button className="w-[100%] py-5 my-4"> {title}</Button>
      </Link>
    </div>
  );
};

export default HomepageButtonComp;
