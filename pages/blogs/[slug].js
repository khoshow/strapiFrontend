import axios from "axios";
import React from "react";
import { useRouter } from "next/router";

function PostPage({ post }) {
  // console.log("fine", post[0].attributes.Title);
  return (
    <div>
      Welcome
      <h1>{post[0].attributes.Title}</h1>
      <h2>{post[0].attributes.Description}</h2>
    </div>
  );
}

export default PostPage;

export function getStrapiURL(path = "") {
  return `${
    process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
  }${path}`;
}

export async function getStaticProps({ params }) {
  // console.log("hello", params.slug);
  const postRes = await axios.get(
    `${getStrapiURL(`/api/posts?filters[slug][$eq]=${params.slug}`)}`
  );

  return {
    props: {
      post: postRes.data.data,
    },
  };
}

export async function getStaticPaths() {
  const postsRes = await axios.get(`${getStrapiURL(`/api/posts`)}`);

  const paths = postsRes.data.data.map((post) => {
    return { params: { slug: post.attributes.slug.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
