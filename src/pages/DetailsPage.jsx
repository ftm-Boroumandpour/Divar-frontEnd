import { useQuery } from "@tanstack/react-query"
import {  useParams } from "react-router-dom"
import { getDtailsPost } from "../services/user"
import Loader from "../components/modules/Loader"

import DetailsPost from "../components/templates/DetailsPost"


function DetailsPage() {
    const {id}=useParams()
    // console.log(id)
    const {data , isLoading}=useQuery(["get-detail-post" , id],
    getDtailsPost)
    // if(data){
    //     const {data:{post}}=data
    // }
    
  return (
   <>
   {isLoading ? (<Loader/>) :(
    <DetailsPost data={data}/>
   )}
   </>
    
  )
}

export default DetailsPage