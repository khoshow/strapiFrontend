import React, { useEffect, useState } from "react";
import PostPreview from "./PostPreview";

function LatestPosts({ posts }) {
  const [latestPosts, setLatestPosts] = useState([]);
  useEffect(() => {
    setLatestPosts(posts.slice(0, 5));
  }, [posts]);

  function renderPostPreviews() {
    return latestPosts.map((post) => {
      return <PostPreview post={post} key={post.id} />;
    });
  }
  return (
    <div>
      <h2>Latest Posts</h2>

      {renderPostPreviews()}
    </div>
  );
}

export default LatestPosts;
