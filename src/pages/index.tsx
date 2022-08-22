import { ReactElement } from "react";
import { trpc } from "../utils/trpc";
import { NextPageWithLayout } from "./_app";
import Sidebar from "../components/sidebar";
import Layout from "../components/layout";

const Home: NextPageWithLayout = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from chigala" }]);

  return (
    <>
      <h1>{hello.data?.greeting}</h1>
    </>
  );
};

Home.getLayout = (page: ReactElement) => (
  <Layout>
    <Sidebar>{page}</Sidebar>
  </Layout>
);

export default Home;
