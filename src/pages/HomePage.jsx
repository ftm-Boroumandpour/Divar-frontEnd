import { useQuery } from "@tanstack/react-query"
import Main from "../components/templates/Main"
import Sidebar from "../components/templates/Sidebar"
import { getCategory } from "../services/admin"
import { getAllPosts } from "../services/user"
import Loader from "../components/modules/Loader"
// import { useState } from "react"


// import { useEffect } from "react"
// import { filterPosts } from "../utils/helper"


function HomePage() {
  const {data:categories , isLoading:categoryLoading }=useQuery(["get-cateories"],getCategory)
  const {data:posts , isLoading:postLoading }=useQuery(["posts-list"],getAllPosts )
  
  
  // const [query , setQuery]=useState()
  // const [displayed , setDisplayed] = useState()
    // const categoryHandler= event=>{
    //   const {tagName}=event.target
      
    //   if(tagName!=="P") return
    //   setQuery(event.target.parentElement.getAttribute("id"))
    // }
  //   useEffect(()=>{
  //     setDisplayed(posts.data.posts)
  //   },[posts])
  // useEffect(()=>{
  //   const finalPosts=filterPosts(posts?.data.posts , query)

  //   setDisplayed(finalPosts)
    
  // } ,[query])
  return (
    <>
    {categoryLoading || postLoading ? (<Loader/>):(
      <div style={{display:"flex"}}>
      {/* <Sidebar categories={categories} categoryHandler={categoryHandler} /> */}
      <Sidebar categories={categories} />
      <Main  posts={posts}/>
    </div>
    )}
    </>
  )
}

export default HomePage