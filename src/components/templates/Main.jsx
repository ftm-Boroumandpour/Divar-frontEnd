/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { sp } from "../../utils/numbers"

import styles from "./Main.module.css"



function Main({posts}) {
    console.log(posts)
    
  return (
    <div className={styles.container}>
        {posts?.map(post=>(
        // {posts?.data.posts.map(post=>(
            <div key={post._id} className={styles.card}>
                <div className={styles.info}>
                    <p>{post.options.title}</p>
                    <div>
                        <p>{sp(post.amount)}</p>
                        <span>{post.options.city}</span>
                    </div>
                    <button><Link to={`/posts/${post._id}`}>جزئیات آگهی</Link></button>
                </div>
                <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
            </div>
        ))}
    </div>
    // <div className={styles.container}>
    //     {posts.map(post=>(
    //         <div key={post._id} className={styles.card}>
    //             <div className={styles.info}>
    //                 <p>{post.options.title}</p>
    //                 <div>
    //                     <p>{sp(post.amount)}</p>
    //                     <span>{post.options.city}</span>
    //                 </div>
    //             </div>
    //             <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
    //         </div>
    //     ))}
    // </div>
  )
}

export default Main