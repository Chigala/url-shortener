import React from "react";
import { BsShareFill } from "react-icons/bs";
import { ImCopy, ImQrcode } from "react-icons/im";
import { TbEdit } from "react-icons/tb";
import Link from "next/link";

const InfoBar = () => {
  return (
    <div className="border-b border-gray-300">
      <div className="mt-2 flex flex-row items-center gap-3 border border-gray-200 bg-white px-9  py-2 text-black shadow-md dark:border-transparent dark:bg-darkBg-secondary dark:text-white">
        <p>bit.ly/m/vote-for-me</p>
        <TbEdit />
        <ImCopy />
        <ImQrcode />
        <BsShareFill />
      </div>
      <div className="flex space-x-4 px-9 py-3 text-lg dark:text-gray-400 ">
        <Link href="#">links</Link>
        <Link href="#">customization</Link>
        <Link href="#">performance</Link>
      </div>
    </div>
  );
};

export default InfoBar;
