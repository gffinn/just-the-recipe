// components/Feed.tsx
import React from "react";
import Post from "./Post";
import { posts } from "../data/DemoPosts";
import styles from "./Feed.module.css";

const Feed: React.FC = () => {
  return (
    <div className={styles.feedContainer}>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.username}
          avatar={post.avatar}
          content={post.content}
          timestamp={post.timestamp}
        />
      ))}
    </div>
  );
};

export default Feed;
