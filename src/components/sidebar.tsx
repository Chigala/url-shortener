import React from "react";
import { LayoutProps } from "./layout";

const Sidebar = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-row">
      <p>the sidebar</p>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
