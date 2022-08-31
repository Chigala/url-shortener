import { NextPage } from "next";
import React, { useState } from "react";
import { ImUpload } from "react-icons/im";
import { TbPictureInPictureOn } from "react-icons/tb";
import Layout from "../../components/layout";
import InputModal from "../../components/page-links/inputModal";
import PageLinkLayout from "../../components/page-links/pageLinkLayout";

const CustomizationLinkPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    console.log("opening modal");
    setIsOpen(true);
  }
  const color = [
    "#f44336",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
  ];
  const removeApostropheFromHex = (hex: string) => {
    return hex.replace(/'/g, "");
  };
  return (
    <Layout>
      <PageLinkLayout>
        <div className="w-3/4">
          <div className="space-y-7">
            <p className="text-xl text-black">Profile</p>
            <div>
              <p className="text-black">Image</p>
              <div className="flex items-center justify-between">
                <div
                  onClick={openModal}
                  className="relative h-24 w-24 rounded-full bg-gray-400 "
                >
                  <TbPictureInPictureOn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl text-white" />
                </div>
                <button
                  onClick={openModal}
                  className="flex h-fit space-x-2 rounded-md border-2 border-blue-500 px-2 py-3 text-sm text-black shadow-sm"
                >
                  <span>
                    <ImUpload className="text-gray-400" />
                  </span>
                  <p>Upload a photo </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="pageTitle" className="text-black">
                Page Title
              </label>
              <input id="pageTitle" type="text" className="rounded-md pt-2" />
              <p className="text-xs">
                12 <span>Characters remaining</span>
              </p>
            </div>
            <div>
              <p className="text-black">Button layout</p>
              <div className="grid grid-cols-3 gap-2 pt-2">
                <div className="h-8 w-full rounded-sm border border-gray-500 shadow-md "></div>
                <div className="h-8 w-full rounded-sm border-2 border-gray-500 shadow-md "></div>
                <div className="h-8 w-full rounded-sm border border-gray-500 shadow-md shadow-black "></div>
                <div className="h-8 w-full rounded-sm border border-gray-500 shadow-md shadow-black "></div>
                <div className="h-8 w-full rounded-sm border border-gray-500 shadow-md shadow-black "></div>
                <div className="h-8 w-full rounded-sm border border-gray-500 shadow-md shadow-black "></div>
              </div>
            </div>
            <div>
              <p className="text-black">Button text-color</p>
              <div className="flex gap-4 pt-2">
                {color.map((item, index) => (
                  <div
                    key={index}
                    style={{ backgroundColor: removeApostropheFromHex(item) }}
                    className={` h-12 w-12 rounded-full border`}
                  ></div>
                ))}
              </div>
            </div>
            <div>
              <p>Logo</p>
              <div>
                <div className="flex items-center justify-between">
                  <div
                    className="relative h-24 w-24 rounded-full bg-gray-400 "
                    onClick={openModal}
                  >
                    <TbPictureInPictureOn className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-4xl text-white" />
                  </div>
                  <button
                    className="flex h-fit space-x-2 rounded-md border-2 border-blue-500 px-2 py-3 text-sm text-black shadow-sm"
                    onClick={openModal}
                  >
                    <span>
                      <ImUpload className="text-gray-400" />
                    </span>
                    <p>Upload a photo </p>
                  </button>
                </div>
              </div>
            </div>
            <InputModal closeModal={closeModal} isOpen={isOpen} />
          </div>
        </div>
      </PageLinkLayout>
    </Layout>
  );
};

export default CustomizationLinkPage;
