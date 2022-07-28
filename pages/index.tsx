import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../components/Feed";
import Postbox from "../components/Postbox";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Reddit Clone</title>
      </Head>
      <div className="max-w-5xl mx-auto my-7">
        <Postbox />

        <div className="flex">
          <Feed />
        </div>
      </div>
    </>
  );
};

export default Home;
