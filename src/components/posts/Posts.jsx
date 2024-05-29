import React, { useState } from "react";
import Post from "../post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  const [showAllPosts, setShowAllPosts] = useState(false);

  const toggleShowAllPosts = () => {
    setShowAllPosts((prevShowAllPosts) => !prevShowAllPosts);
  };

  return (
    <div className="posts">
      {posts.slice(0, showAllPosts ? posts.length : 6).map((p) => (
        <Post key={p._id} post={p} />
      ))}
      {!showAllPosts && posts.length > 6 && (
        <div className="btnSee">
          <button onClick={toggleShowAllPosts} className="see-more-btn">
            See More
          </button>
        </div>
      )}
      {showAllPosts && (
        <div className="btnSee">
          <button onClick={toggleShowAllPosts} className="see-more-btn">
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}
