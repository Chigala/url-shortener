import React from "react";
import { LayoutProps } from "../layout";
import ImagePreviewCard from "./imagePreviewCard";
import InfoBar from "./infobar";

const PageLinkLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <InfoBar />
      <div className="flex px-9 py-4">
        <main className="flex-grow">{children}</main>
        <ImagePreviewCard />
      </div>
    </>
  );
};

export default PageLinkLayout;
