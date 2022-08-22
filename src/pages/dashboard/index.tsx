import React from "react";
import { NextPageWithLayout } from "../_app";
import Sidebar from "../../components/sidebar";
import { ReactElement } from "react";
import Layout from "../../components/layout";

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="bg-yellow-500 hover:bg-gray-500 md:bg-yellow-200 lg:bg-red-300">
      Dashboard
    </div>
  );
};

Dashboard.getLayout = (page: ReactElement) => (
  <Layout>
    <Sidebar>{page}</Sidebar>
  </Layout>
);

export default Dashboard;
