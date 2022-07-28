import { useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Post from "../../components/Post";
import { GET_POST_BY_POST_ID } from "../../graphql/queries";

const PostPage = () => {
  const router = useRouter();
  const { data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: router.query.postId,
    },
  });

  const post: Post = data?.getPostListByPostId;
  return (
    <>
      <Head>
        <title>Reddit Clone - {post?.title}</title>
      </Head>
      <div className="mx-auto my-7 max-w-5xl">
        <Post post={post} />
      </div>
    </>
  );
};

export default PostPage;
