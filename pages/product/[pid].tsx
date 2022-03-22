import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const Details = dynamic(
  () => import("board-lukuku").then((mod) => mod.Details),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);
const CommentsWrapper = dynamic(
  () => import("board-lukuku").then((mod) => mod.CommentsWrapper),
  {
    ssr: false,
    loading: () => <p>...</p>,
  }
);
import { Container } from "styled/Container";
import CommentForm from "components/CommentForm";
import CommentBox from "components/CommentBox";
import { commentsJson } from "utils/sample-data";

const Post = () => {
  const router = useRouter();
  const { pid } = router.query;
  // comments data

  return (
    <>
      {" "}
      <Head>
        <title>Post single post</title>
      </Head>
      <div>
        <Container>
          <Details pid={pid} />
          {/* comments */}
          <CommentsWrapper
            datas={commentsJson}
            CommentForm={CommentForm}
            CommentBox={CommentBox}
          />
        </Container>
      </div>
    </>
  );
};

export default Post;
