"use client";
import React, { useCallback, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineLogout } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import NavbarLinks from "@/app/ui/Navbar/NavbarLinks";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaUserCircle } from "react-icons/fa";
import { IoLogOutOutline } from "react-icons/io5";
import { GrLogout } from "react-icons/gr";
import { signOut } from "next-auth/react";
import axios from "axios";
import { MdLocationPin } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Sidebar = ({ session }: { session: any }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const sidebarRef = React.useRef(null);
  const pathname = usePathname();
  const [currentPath, setPath] = useState("/");

  const closeSidebar = useCallback(
    (event: any) => {
      if (currentPath !== pathname) {
        setPath(pathname);
        setIsOpen(false);
      }
      if (sidebarRef.current) {
        setIsOpen(false);
      }
    },
    [currentPath, pathname, setIsOpen]
  );
  const handleLogout = async () => {
    const { data } = await axios.get("/backend/api/v1/auth/logout");
    // console.log(data);
    signOut();
  };
  React.useEffect(() => {
    document.addEventListener("mousedown", closeSidebar, false);

    return () => {
      document.removeEventListener("mousedown", closeSidebar, false);
    };
  }, [closeSidebar]);
  return (
    <div className="relative md:hidden block">
      <div className="pr-1" onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu
          className="sm:hidden block w-7 h-7"
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      <div
        ref={sidebarRef}
        className={`md:hidden block w-4/6 min-h-[100vh] bg-white shadow-2xl z-50 fixed left-0 top-14 py-3 px-6 transition-all duration-500 ease-in-out ${
          isOpen ? "transform translate-x-0 " : "transform -translate-x-full"
        }`}
      >
        <div className="flex space-x-10">
          <Link href="/">
            <Image
              src={"/Logo.png"}
              alt="logo"
              width={162}
              height={70}
              className="h-[2.5rem] w-[auto] sm:hidden"
            />
          </Link>
          <div
            onClick={() => setIsOpen(false)}
            className="p-2 relative bottom-2 right-0 left-4 bg-t-blue rounded-full shadow-2xl"
          >
            <RxCross2 className="h-6 w-6 font-extrabold text-white" />
          </div>
        </div>
        <ul
          className="space-x-5 mt-8 md:hidden block"
          onClick={(e) => closeSidebar(e)}
        >
          <NavbarLinks
            renderTo="navigationLink"
            classCss="block"
            session={session}
          />
        </ul>
        <div className="my-4 border-b border-gray-600 h-1 p-1"></div>
        <ul className="space-x-5 mt-5" onClick={(e) => closeSidebar(e)}>
          {session ? (
            <div className="flex gap-6 flex-col justify-items-start">
              <li className="flex gap-5 items-center">
                Account
                <span>
                  <FaUserCircle className="h-[20px] w-[20px]" />
                </span>
              </li>
              <li className="flex gap-5 items-center" onClick={handleLogout}>
                Log out
                <span className="border p-1 flex items-center justify-center rounded-2xl bg-black">
                  <IoLogOutOutline className="h-[20px] w-[20px] font-extrabold text-white relative left-[2px]"></IoLogOutOutline>
                </span>
              </li>
            </div>
          ) : (
            <NavbarLinks
              renderTo="userCredentials"
              classCss="block"
              session={session}
            />
          )}
        </ul>
        <div className="my-4 border-b border-gray-600 h-1 p-1"></div>
        <h3 className="font-extrabold font-manrop">Contact Info</h3>
        <ul className="mt-5">
          <li className="text-md flex items-center gap-2 mt-2">
            <MdLocationPin />
            <span>Gurgaon</span>
          </li>
          <li className="text-md flex items-center gap-2 mt-2">
            <MdLocationPin />
            <span>New Delhi</span>
          </li>
          <li>
            <a
              href="tel:+919811214881"
              className="text-md flex items-center gap-2 mt-2"
            >
              <BsFillTelephoneFill />
              <span>+91 - 9811214881</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
