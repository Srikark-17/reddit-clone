import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Avatar from "../../components/Avatar";
import Feed from "../../components/Feed";
import Postbox from "../../components/Postbox";
import {
  GET_ALL_POSTS,
  GET_ALL_POSTS_BY_TOPIC,
  GET_SUBREDDIT_BY_TOPIC,
} from "../../graphql/queries";
import client from "../../apollo-client";

const Subreddit = () => {
  const {
    query: { topic },
  } = useRouter();
  const [description, setDescription] = useState();

  const getData = async () => {
    const {
      data: { getSubredditListByTopic },
    } = await client.query({
      query: GET_SUBREDDIT_BY_TOPIC,
      variables: {
        topic: topic,
      },
    });
    setDescription(getSubredditListByTopic[0]?.description);
  };

  getData();

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
              <p className="text-sm text-gray-400">{description}</p>
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
