import React from "react";
import { BsLink } from "react-icons/bs";
import { TbWaveSawTool } from "react-icons/tb";
import { BsFillBarChartFill } from "react-icons/bs";

const LinkCard: React.FC = () => {
  return (
    <div className="flex w-full cursor-pointer flex-col gap-y-9 rounded-lg border bg-lightBg-secondary p-3 shadow-md dark:border-gray-500 dark:bg-black dark:hover:border-white">
      <div className="flex justify-between">
        <div className="flex gap-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-500 dark:border-white ">
            <BsLink className="text-2xl text-black dark:text-white" />
          </div>
          <div>
            <p className="text-black dark:text-white">bit.ly/chigala</p>
            <p>www.theverge.com</p>
          </div>
        </div>
        <div>
          <TbWaveSawTool className="text-black dark:text-white" />
        </div>
      </div>
      <div className="flex items-center justify-end gap-x-2">
        <p className="text-xs">2days ago</p>
        <BsFillBarChartFill />
        <p className="text-xs">24</p>
      </div>
    </div>
  );
};

export default LinkCard;
