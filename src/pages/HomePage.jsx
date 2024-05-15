import { useQuery } from "@tanstack/react-query";
import Main from "../components/templates/Main";
import Sidebar from "../components/templates/Sidebar";
import { getCategory } from "../services/admin";
import { getAllPosts } from "../services/user";
import Loader from "../components/modules/Loader";

////////////
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

// import { useEffect } from "react"
import { filterPosts } from "../utils/helper";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [query , setQuery]=useState("")
  // const [slug , setSlug]=useState("")
  const [displayed, setDisplayed] = useState();


  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-cateories"],
    getCategory
  );
  const { data: posts, isLoading: postLoading } = useQuery(
    ["posts-list"],
    getAllPosts,
    {
      onSuccess: (data) => {
        setDisplayed(() => data?.data.posts);

        const categoryID = searchParams.get("category");
        console.log(categoryID)
        if (categoryID) {
      
          let finalPosts = filterPosts(data?.data.posts, categoryID);
          setDisplayed(finalPosts);
        }
      },
    }
  );

  const categoryHandler = (event) => {
    const { tagName } = event.target;

    if (tagName !== "P") return;
    const categoryID = event.target.parentElement.getAttribute("id");
  
    // console.log(categoryID)
    // setQuery(categoryID)
    if (categoryID === "allPosts") {
      setSearchParams();
      console.log(searchParams);
      setDisplayed(() => posts?.data.posts);
    } else {
      setSearchParams(`category=${categoryID}`);
      // let finalPosts = filterPosts(posts.data.posts , categoryID)
      // let finalPosts = filterPosts(displayed?.data.posts , categoryID)
      let finalPosts = filterPosts(displayed, categoryID);
      setDisplayed(finalPosts);
      // console.log({ categoryID, searchParams, finalPosts });
    }
  };

  return (
    <>
      {categoryLoading || postLoading ? (
        <Loader />
      ) : (
        <div style={{ display: "flex" }}>
          <Sidebar categories={categories} categoryHandler={categoryHandler} />
          {/* <Sidebar categories={categories} /> */}
          <Main posts={displayed} />
        </div>
      )}
    </>
  );
}

export default HomePage;
