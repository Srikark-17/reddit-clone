import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Avatar from "../../components/Avatar";
import Feed from "../../components/Feed";
import Postbox from "../../components/Postbox";

const Subreddit = () => {
  const {
    query: { topic },
  } = useRouter();

  return (
    <>
      <Head>
        <title>Reddit Clone - r/{topic}</title>
      </Head>
      <div className={`h-24 bg-red-400 p-8`}>
        <div className="-mx-8 mt-10 bg-white">
          <div className="flex mx-auto max-w-5xl items-center space-x-4 pb-3">
            <div className="-mt-5">
              <Avatar seed={topic as string} large />
            </div>

            <div className="py-2">
              <h1 className="text-3xl font-semibold ">Welcome to r/{topic}!</h1>
              <p className="text-sm text-gray-400">
                You can talk about things related to {topic} here!
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 max-w-5xl pb-10">
          <Postbox subreddit={topic as string} />
          <Feed topic={topic as string} />
        </div>
      </div>
    </>
  );
};

export default Subreddit;
