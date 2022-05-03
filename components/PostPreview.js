import React from "react";
import Link from "next/link";

function PostPreview({ post }) {
  // console.log("Post from Post Preview", post.attributes.Title);
  return (
    <>
      <Link href={`/blogs/${post.attributes.slug}`}>
        <div>
          <h3>{post.attributes.Title}</h3>
          <p>{post.attributes.Description}</p>
        </div>
      </Link>
    </>
  );
}

export default PostPreview;
