import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex">
          <Sidebar />
        <div className="flex-grow h-screen overflow-y-scroll">
          <Navbar />
          <main className="bg-lightBg-primary dark:bg-darkBg-primary">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
