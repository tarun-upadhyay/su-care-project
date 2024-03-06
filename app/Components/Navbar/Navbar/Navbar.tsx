import TopAlertBar from "../TopAlertBar/TopAlertBar";
import Image from "next/image";
import NavbarLinks from "@/app/ui/Navbar/NavbarLinks";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { Suspense } from "react";
import AuthDetails from "@/app/ui/Navbar/AuthDetails";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  // console.log(session?.user);

  return (
    <div>
      <nav
        className={`w-full bg-white shadow-lg font-baijam text-lg font-extrabold z-50 fixed top-0 transition-all`}
      >
        <TopAlertBar />
        <div className="flex items-center sm:px-24 px-2  py-2 relative">
          <div id="logo" className="w-[55%] flex items-center space-x-2">
            <Sidebar session={session} />

            <Link href="/">
              <Image
                src={"/Logo.png"}
                alt="logo"
                width={162}
                height={70}
                className="h-[2.5rem] sm:h-[3rem] w-[auto]"
              />
            </Link>
          </div>
          <div className="hidden sm:flex w-[40%] gap-x-5 items-center justify-between">
            <ul className="space-x-5 cursor-pointer">
              <NavbarLinks
                renderTo="navigationLink"
                classCss="inline-block"
                session={session}
              />
            </ul>
            <ul className="space-x-5 cursor-pointer">
              {session ? (
                <Suspense
                  fallback={
                    <div className="avatar cursor-pointer">
                      <span className="avatar-initial">
                        {session?.user && session?.user.name.split("")[0]}
                      </span>
                    </div>
                  }
                >
                  <AuthDetails
                    name={session?.user.name.split("")[0]}
                    image={
                      session?.user?.image ||
                      session?.user?.picture ||
                      undefined
                    }
                  />
                </Suspense>
              ) : (
                <NavbarLinks
                  renderTo="userCredentials"
                  classCss="inline-block"
                  session={session}
                />
              )}
            </ul>
          </div>
          <div className="sm:hidden block ml-28">
            <ul className="space-x-5 cursor-pointer">
              {session ? (
                <Suspense
                  fallback={
                    <div className="avatar cursor-pointer">
                      <span className="avatar-initial">
                        {session?.user && session?.user.name.split("")[0]}
                      </span>
                    </div>
                  }
                >
                  <AuthDetails
                    name={session?.user.name.split("")[0]}
                    image={
                      session?.user?.image ||
                      session?.user?.picture ||
                      undefined
                    }
                  />
                </Suspense>
              ) : (
                <NavbarLinks
                  renderTo="login"
                  classCss="inline-block"
                  session={session}
                />
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
