import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex-grow bg-lightBg-primary dark:bg-darkBg-primary">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
