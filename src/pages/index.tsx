import React from "react";
import Layout from "../components/layout";
import { trpc } from "../utils/trpc";

const Home: React.FC = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from chigala" }]);

  return (
    <Layout>
      <h1 className="text-black dark:text-white">{hello.data?.greeting}</h1>
    </Layout>
  );
};

export default Home;
