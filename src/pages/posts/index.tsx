import React from "react";
import { PostCard } from "./posts_components/PostCard";
import { posts } from "./posts_components/posts";
const Posts = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {posts.map((post, idx) => (
        <PostCard
          title={post.title}
          date={post.date}
          description={post.description}
          image={post.img}
          additionalInfo={post.additionalInfo}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Posts;
