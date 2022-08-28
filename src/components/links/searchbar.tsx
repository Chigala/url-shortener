import React from "react";
import { BsGrid } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

const SearchBar: React.FC = () => {
  return (
    <div className="flex gap-x-2 pt-4 text-black dark:text-white ">
      <div className="relative w-full  ">
        <input
          type="text"
          placeholder="Search"
          className="w-full rounded-md pl-12 placeholder:text-gray-500 focus:ring-1 focus:ring-gray-400 dark:border-gray-500 dark:bg-darkBg-secondary  dark:placeholder:text-white"
        />
        <GoSearch className="absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2 transform text-xl " />
      </div>
      <div className="flex w-fit items-center rounded-md border border-gray-300 px-2 ">
        <BsGrid className="text-lg" />
      </div>
      <div className="flex w-fit items-center rounded-md border border-gray-300 px-2 ">
        <AiOutlineUnorderedList className="text-lg" />
      </div>
      <select
        id="select"
        aria-label="select"
        name="select"
        className="rounded-sm dark:bg-darkBg-secondary "
      >
        <option selected className="hidden">
          please select
        </option>
        <option value="link">Link</option>
        <option value="video">Video</option>
        <option value="audio">Audio</option>
        <option value="image">Image</option>
      </select>
    </div>
  );
};

export default SearchBar;
