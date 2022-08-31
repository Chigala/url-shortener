import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineHome, AiOutlineLink } from "react-icons/ai";
import { TbUnlink } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  const checkPathname = (pathname: string) => {
    return pathname.toLowerCase() ===
      router.pathname.split("/")[1]?.toLowerCase()
      ? true
      : false;
  };
  interface Prop {
    children: React.ReactNode;
    href: string;
    name: string;
  }
  const NavLink = ({ children, href, name }: Prop) => {
    return (
      <Link href={href}>
        <a
          className={`${
            checkPathname(name) ? "border border-white border-r-8 " : null
          } flex items-center gap-1 rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none`}
        >
          {children}
        </a>
      </Link>
    );
  };
  return (
    <div className="flex h-screen w-44 flex-col gap-y-10  bg-blue-500/100 text-lg ">
      <div className=" border-b border-white py-4">
        {theme === "dark" ? (
          <div className="mx-auto h-9 w-9 bg-white">
            <BsLightningCharge className="text-4xl " />
          </div>
        ) : (
          <div className="mx-auto flex h-16 w-16 flex-row items-center justify-center rounded-full bg-white">
            <BsLightningCharge className="text-4xl text-black" />
          </div>
        )}
      </div>
      <div className=" flex flex-col gap-y-4 px-2">
        <NavLink href="#" name="Dashboard">
          <span>
            <AiOutlineHome />
          </span>
          Dashboard
        </NavLink>
        <NavLink href="#" name="Links">
          <span>
            <AiOutlineLink />
          </span>
          Links
        </NavLink>
        <NavLink href="#" name="Page-links">
          <span>
            <TbUnlink />
          </span>
          Page-links
        </NavLink>
        <NavLink href="#" name="Settings">
          <span>
            <FiSettings />
          </span>
          Settings
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
