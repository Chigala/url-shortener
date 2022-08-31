import React from "react";
import { BsShareFill } from "react-icons/bs";
import { ImCopy, ImQrcode } from "react-icons/im";
import { MdOutlineCreate } from "react-icons/md";
import { AiOutlineLink } from "react-icons/ai";
import { FcSalesPerformance } from "react-icons/fc";
import { TbEdit } from "react-icons/tb";
import Link from "next/link";
import { useRouter } from "next/router";

const InfoBar = () => {
  const linkData = [
    {
      name: "links",
      icon: <AiOutlineLink />, 

      href: "/pageLink",
    },
    {
      name: "customization",
      icon: <MdOutlineCreate />,
      href: "/customization",
    },
    {
      name: "performance",
      icon: <FcSalesPerformance />,
      href: "/performance",
    },
  ];
  const router = useRouter();
  const checkPathname = (pathname: string) => {
    return pathname.toLowerCase() ===
      router.pathname.split("/").pop()?.toLowerCase()
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
            checkPathname(name) ? " border-b-2 border-black " : null
          } flex items-center gap-1  px-3 py-2 text-base font-medium capitalize  hover:bg-blue-500 hover:text-white focus:bg-gray-700 focus:text-white focus:outline-none`}
        >
          {children}
        </a>
      </Link>
    );
  };
  return (
    <div className="border-b border-gray-300">
      <div className="mt-2 flex flex-row items-center gap-3 border border-gray-200 bg-white px-9  py-2 text-black shadow-md dark:border-transparent dark:bg-darkBg-secondary dark:text-white">
        <p>bit.ly/m/vote-for-me</p>
        <TbEdit />
        <ImCopy />
        <ImQrcode />
        <BsShareFill />
      </div>
      <div className="flex space-x-4 px-9  text-lg dark:text-gray-400 ">
        {linkData.map((item, index) => (
          <NavLink key={index} href="#" name={item.name}>
            <span>{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default InfoBar;
