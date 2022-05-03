import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import axios from "axios";
import NavBar from "../../components/NavBar";
import HomeHeader from "../../components/HomeHeader";
import LatestPosts from "../../components/LatestPosts";

export default function Home({ posts }) {
  //   console.log("posts ", posts.data[0].attributes.Content);
  return (
    <>
      <div className="container">
        <HomeHeader />
        {/* {console.log("Hello", posts.data)} */}
        <LatestPosts posts={posts.data} />
      </div>
    </>
  );
}


export function getStrapiURL(path = "") {
    return `${
      process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
  }



export async function getStaticProps() {
  const postsRes = await axios.get(`${getStrapiURL(`/api/posts`)}`);
//   console.log("postRes", postsRes.data);
  return {
    props: {
      posts: postsRes.data,
    },
  };
}
