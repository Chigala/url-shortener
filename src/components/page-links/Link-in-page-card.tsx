import Link from "next/link";
import React from "react";
import { useState } from "react";
import { AiOutlineArrowUp, AiOutlineDelete } from "react-icons/ai";
import { BsFillBarChartFill, BsGrid } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import SwitchComponent from "../switch";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export interface LinkCardProps {
  item: {
    url: string;
    title: string;
    id: string;
  };
}

const LinkInPageCard = ({ item }: LinkCardProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const {
    setNodeRef,
    attributes,
    listeners,
    transition,
    transform,
    isDragging,
  } = useSortable({ id: item.id, data: item });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0 : 1,
  };
  return (
    <div
      ref={setNodeRef}
      {...attributes}
      key={item.id}
      className={`flex rounded-md shadow-md  transition  hover:border-black`}
      style={style}
    >
      <div
        {...listeners}
        className="flex cursor-grab items-center border-r border-gray-400  px-2"
      >
        <BsGrid className="text-xl" />
      </div>
      <div className="w-full space-y-3 py-2 px-3 ">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-black">{item.title}</p>
          <div className="flex gap-3 text-2xl">
            <TbEdit className="" />
            <AiOutlineDelete className="text-red-500" />
          </div>
        </div>
        <div className="flex flex-col text-base">
          <Link href="#">bit.ly/3PD04mj</Link>
          <Link href="#">{item.url}</Link>
        </div>
        <div className="flex items-center space-x-2">
          <BsFillBarChartFill />
          <p className="text-xs text-green-400">
            4 <span>clicks in the last one month</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-3">
          <SwitchComponent setEnabled={handleChange} enabled={isChecked} />
          <button className="rounded-2xl border border-gray-400  p-2 text-xs text-black">
            <p className="flex items-center">
              <span>
                <AiOutlineArrowUp />
              </span>
              move to top
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LinkInPageCard;
