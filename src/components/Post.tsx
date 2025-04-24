// components/Post.tsx
import React from "react";
import styles from "./Post.module.css";

interface PostProps {
  username: string;
  avatar: string;
  content: string;
  timestamp: string;
}

const Post: React.FC<PostProps> = ({ username, avatar, content, timestamp }) => {
  return (
    <div className={styles.post}>
      <img src={avatar} alt={`${username}'s avatar`} className={styles.avatar} />
      <div className={styles.body}>
        <div className={styles.header}>
          <strong>{username}</strong> <span>{timestamp}</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Post;
