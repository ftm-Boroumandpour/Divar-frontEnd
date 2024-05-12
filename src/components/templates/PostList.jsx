/* eslint-disable no-unused-vars */
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deletePost, getPosts } from "../../services/user"
import Loader from "../modules/Loader"
import { sp } from "../../utils/numbers"

import styles from "./Postlist.module.css"
import api from "../../config/api"



function PostList() {

    const {data , isLoading} = useQuery(["my-post-list"] , getPosts)
    console.log(data)

    const queryClient = useQueryClient()
    const {mutate} = useMutation(deletePost ,{
        onSuccess:()=>queryClient.invalidateQueries("my-post-list")
    })

    const delHandler=(id)=>{
        mutate(id)
        console.log(id)
    }
    
  return (
    <div className={styles.list}>
        {isLoading ? <Loader/> :(
            <>
            <h3>آگهی های شما</h3>
            {
                data.data.posts.map(post=>(
                    <div key={post._id} className={styles.post}>
                        <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} />
                        <div>
                            <p>{post.options.title}</p>
                            <p>{post.options.content}</p>
                        </div>
                        <button onClick={()=>(delHandler(post._id))}>حذف آگهی</button>
                        
                        <div className={styles.price}>
                            <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                            <p>{sp(post.amount)}تومان</p>
                        </div>
                    </div>
                ))
            }
            </>
        )}
    </div>
  )
}

export default PostList