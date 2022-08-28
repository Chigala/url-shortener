import React from "react";
import { BsLightningCharge } from "react-icons/bs";

const ImagePreviewCard: React.FC = () => {
  return (
    <div className="ml-4 mt-6 flex h-fit min-h-screen w-72 flex-col justify-between rounded-xl px-3 py-4 text-center shadow-xl shadow-black">
      <div className="space-y-5">
        <BsLightningCharge className="mx-auto text-4xl text-black " />
        <h1>Hello world</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolore
          amet molestiae quos cupiditate nesciunt nemo saepe consectetur fugit
          distinctio.hello are there
        </p>
        <div className="flex flex-col space-y-3">
          <button className="rounded-lg border border-gray-400 shadow-md">
            <a href="#">Go to Google</a>
          </button>
          <button className="rounded-lg border border-gray-400 shadow-md">
            <a href="#">Go to Google</a>
          </button>
          <button className="rounded-lg border border-gray-400 shadow-md">
            <a href="#">Go to Google</a>
          </button>
          <button className="rounded-lg border border-gray-400 shadow-md">
            <a href="#">Go to Google</a>
          </button>
        </div>
      </div>
      <BsLightningCharge className="mx-auto text-4xl text-black " />
    </div>
  );
};

export default ImagePreviewCard;
