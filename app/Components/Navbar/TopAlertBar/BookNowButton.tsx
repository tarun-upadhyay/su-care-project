"use client";
import { Button } from "@material-tailwind/react";
import Link from "next/link";

const BookNowButton = () => {
  return (
    <div className="pl-5">
      <Link href={"/booking"}>
        <button
          className="middle none center rounded-lg bg-pink-500 py-[5px] px-3 md:px-6 font-sans text-[12px] font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          data-ripple-light="true"
        >
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default BookNowButton;
