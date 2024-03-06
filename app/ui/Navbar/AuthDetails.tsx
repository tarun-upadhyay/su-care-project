"use client";
import {
  Avatar,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import axios from "axios";
import { signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
const AuthDetails = ({
  name,
  image,
}: {
  name: string;
  image: string | undefined;
}) => {
  const handleLogout = async () => {
    const { data } = await axios.get("/backend/api/v1/auth/logout");
  //  console.log(data);
    signOut();
  };
  let logo = undefined;
  if (image) {
    logo = image.includes("https://lh3.googleusercontent.com/");
  }
  console.log(process.env.GOOGLE_CLIENT_ID, "google cilent");
  return (
    <Menu>
      <MenuHandler>
        {logo ? (
          <div className="flex items-center justify-center">
            <Image
              src={image || ""}
              alt={"Logoo"}
              className="h-12 w-12 rounded-full object-cover"
              height={48}
              width={48}
            />
          </div>
        ) : (
          <div className="avatar cursor-pointer">
            <span className="avatar-initial">{name}</span>
          </div>
        )}
      </MenuHandler>
      <MenuList>
        <MenuItem className="flex gap-5 justify-center items-center">
          Profile
          <FaUserCircle className="h-[20px] w-[20px]" />
        </MenuItem>
        <MenuItem
          className="flex gap-5 items-center justify-center"
          onClick={handleLogout}
        >
          Log out
          <IoLogOutOutline className="h-[20px] w-[20px]"></IoLogOutOutline>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AuthDetails;
