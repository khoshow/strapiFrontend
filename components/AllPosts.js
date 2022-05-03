import React from "react";
import PostPreview from "./PostPreview";

function LatestPosts({ posts }) {
 
  function renderPostPreviews() {
    return posts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }
  return (
    <div>
      <h2>All Posts</h2>

      {renderPostPreviews()}
    </div>
  );
}

export default LatestPosts;
