import React from "react";
import { NextPageWithLayout } from "../_app";
import Sidebar from "../../components/sidebar";
import { ReactElement } from "react";
import Layout from "../../components/layout";
import SearchBar from "../../components/links/searchbar";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="bg-lightBg-primary dark:bg-darkBg-primary">
      <SearchBar />
    </div>
  );
};

// Dashboard.getLayout = (page: ReactElement) => (
//     <Sidebar>{page}</Sidebar>
// );

export default Dashboard;
