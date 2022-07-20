import type { NextPage } from "next";
import Head from "next/head";
import Postbox from "../components/Postbox";

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl mx-auto my-7">
      <Head>
        <title>Reddit Clone</title>
      </Head>
      <div>
        <Postbox />
      </div>
      <div className="flex"></div>
    </div>
  );
};

export default Home;
