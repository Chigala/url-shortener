import React, { forwardRef, RefAttributes } from "react";
import PageLinkLayout from "../../components/page-links/pageLinkLayout";
import Layout from "../../components/layout";
import LinkInPageCard from "../../components/page-links/Link-in-page-card";
import LinkInputField from "../../components/page-links/linkInputField";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import {
  closestCenter,
  DndContext,
  PointerSensor,
  useSensor,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { BsFillBarChartFill, BsGrid } from "react-icons/bs";
import { TbEdit } from "react-icons/tb";
import Link from "next/link";
import { AiOutlineDelete, AiOutlineArrowUp } from "react-icons/ai";
import SwitchComponent from "../../components/switch";

const Item = forwardRef(({ active, ...props }: any, ref: any) => {
  return (
    <div className="" {...props} ref={ref}>
      <div className={`z-30 flex rounded-md border bg-white shadow-md `}>
        <div className="flex cursor-grab items-center border-r border-gray-400  px-2">
          <BsGrid className="text-xl" />
        </div>
        <div className="w-full space-y-3 py-2 px-3 ">
          <div className="flex items-center justify-between">
            <p className="text-xl font-bold text-black">
              {active.data.current.title}
            </p>
            <div className="flex gap-3 text-2xl">
              <TbEdit className="" />
              <AiOutlineDelete className="text-red-500" />
            </div>
          </div>
          <div className="flex flex-col text-base">
            <Link href="#">bit.ly/3PD04mj</Link>
            <Link href="#">{active.data.current.url}</Link>
          </div>
          <div className="flex items-center space-x-2">
            <BsFillBarChartFill />
            <p className="text-xs text-green-400">
              4 <span>clicks in the last one month</span>
            </p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <SwitchComponent
              setEnabled={() => {
                console.log("");
              }}
              enabled={false}
            />
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
    </div>
  );
});
Item.displayName = "Item";

const PageLink: React.FC = () => {
  const [activeDraggable, setActiveDraggable] = React.useState<any>({});
  const [cardData, setCardData] = React.useState<any[]>([
    {
      title: "Facebook",
      url: "https://www.facebook.com/",
      id: "fb",
    },
    {
      title: "Twitter",
      url: "https://www.twitter.com/",
      id: "tw",
    },
    {
      title: "Instagram",
      url: "https://www.instagram.com/",
      id: "ig",
    },
    {
      title: "Youtube",
      url: "https://www.youtube.com/",
      id: "yt",
    },
  ]);
  const sensors = [useSensor(PointerSensor)];

  const handleDragStart = ({ active }: any) => {
    console.log("this is the drag start", active);
    setActiveDraggable(active);
  };
  const handleDragEnd = ({ active, over }: any) => {
    if (active?.id !== over?.id)
      setCardData((items) => {
        const oldindex = items.findIndex((item) => item.id === active.id);
        const newindex = items.findIndex((item) => item.id === over?.id);
        return arrayMove(items, oldindex, newindex);
      });
  };
  return (
    <Layout>
      <PageLinkLayout>
        <div className="w-3/4 space-y-4">
          <button className="w-fit rounded-md bg-black py-2 px-2 text-white">
            Add a link
          </button>
          <LinkInputField />
          <DndContext
            sensors={sensors}
            modifiers={[restrictToWindowEdges]}
            collisionDetection={closestCenter}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={cardData.map((item) => item.id)}
              strategy={verticalListSortingStrategy}
            >
              {cardData.map((item, index) => (
                <LinkInPageCard key={item.id} item={item} />
              ))}
            </SortableContext>
            <DragOverlay dropAnimation={null}>
              {activeDraggable ? <Item active={activeDraggable} /> : null}
            </DragOverlay>
          </DndContext>
        </div>
      </PageLinkLayout>
    </Layout>
  );
};

export default PageLink;
