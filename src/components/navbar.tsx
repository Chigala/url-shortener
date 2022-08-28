import React from "react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import LogoDark from "../svg/logo-dark.svg";
import LogoLight from "../svg/logo-light.svg";
import { AiOutlineSetting } from "react-icons/ai";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { ImSun } from "react-icons/im";
import { BsCloudMoon } from "react-icons/bs";
import { BsLightningFill } from "react-icons/bs";
import { BsLightningCharge } from "react-icons/bs";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

const Modal = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="cursor-pointer p-2 hover:rounded-lg hover:bg-gray-300 focus:rounded-lg focus:bg-gray-300 dark:hover:bg-black ">
          <IoIosArrowUp className="text-xs " />
          <IoIosArrowDown className="text-xs " />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-30 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Edit
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Duplicate
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Archive
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Move
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Share
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Add to favorites
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Delete
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  //   const [mounted, setMounted] = useState(false);
  //   useEffect(() => setMounted(true), []);

  //   if (!mounted) return null;
  return (
    <div className="flex flex-col gap-y-5 border-b border-gray-300 px-9 py-2 text-base text-black dark:text-white">
      <div className="flex items-center justify-between ">
        <div className="flex flex-row items-center">
          {theme === "dark" ? (
            <BsLightningCharge className="mr-4 text-4xl" />
          ) : (
            <BsLightningCharge className="mr-4 text-4xl text-black" />
          )}
          <div className="flex flex-row items-center gap-x-4">
            <div className="h-12 w-12 rounded-full bg-black dark:bg-gray-300"></div>
            <div className="flex flex-row items-center gap-x-2">
              <p>Chigala</p>
              <div className="h-fit w-fit rounded-lg bg-primary  py-1 px-2 text-xs">
                <p className="text-white">hobby</p>
              </div>
              <Modal />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <div
            className="cursor-pointer text-xl dark:text-white"
            onClick={() =>
              theme === "dark" ? setTheme("light") : setTheme("dark")
            }
          >
            {theme === "dark" ? <BsCloudMoon /> : <ImSun />}
          </div>
          <div className="rounded-md border border-gray-300 p-1 ">
            <a href="">feedback</a>
          </div>
          <AiOutlineSetting className="text-2xl text-black dark:text-white" />
        </div>
      </div>
      <div className="space-x-4">
        <a href="">Dashboard</a>
        <a href="">Links</a>
        <a href="">Page-Links</a>
        <a href="">Setting</a>
      </div>
    </div>
  );
};

export default Navbar;
