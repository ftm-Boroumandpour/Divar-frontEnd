/* eslint-disable react/prop-types */

import { sp } from "../../utils/numbers";

import styles from "./DetailsPost.module.css"

function DetailsPost({data:{data:{post}}}) {
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <p>{post.options.title}</p>
        <div>
          <p>{post.options.content}</p>
        </div>
        <div>
          <p>{sp(post.amount)}</p>
          <span>{post.options.city}</span>
        </div>
        <div>
          <p>اطلاعات تماس: {post.userMobile}</p>
        </div>
      </div>
      <img
        src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
      />
    </div>
  );
}

export default DetailsPost;
